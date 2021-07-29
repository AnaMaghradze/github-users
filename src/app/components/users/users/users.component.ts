import {Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {GhUserService} from "../../../shared/services/gh-user.service";
import {User} from "../../../shared/models/user.interface";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {Router} from "@angular/router";
import {UserComponent} from "../user/user.component";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  @ViewChildren(UserComponent) listItems!: QueryList<UserComponent>;
  view: 'list' | 'grid' = 'list';
  users$!: Observable<User[]>;

  constructor(private userService: GhUserService, private router: Router) {
  }

  ngOnInit(): void {
    // this.userService.limit().subscribe();
    this.users$ = this.userService.pipeUsers(this.userService.getUsers());
  }

  findUsers(searchText: string): void {
    this.users$ = this.userService.pipeUsers(this.userService.searchUsers(searchText).pipe(
      map((resp: any) => {
        if (resp.items.length === 0) {
          // if no user found application redirects the not found page
          this.router.navigate(['user-not-found']);
        } else if (resp.items.length === 1) {
          // if you search for a specific user application redirects the user page
          this.router.navigate(['/users', resp.items[0].login])
        }
        return resp.items
      }),
    ))
  }

  viewList(): void {
    this.view = 'list';
    this.listItems.map((item) => item.view = this.view);
  }

  viewGrid(): void {
    this.view = 'grid';
    this.listItems.map((item) => item.view = this.view);
  }
}
