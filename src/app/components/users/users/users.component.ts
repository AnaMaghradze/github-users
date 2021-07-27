import {Component, ContentChildren, OnInit, QueryList, ViewChildren} from '@angular/core';
import {GhUserService} from "../../../shared/services/gh-user.service";
import {User} from "../../../shared/models/user.interface";
import {combineLatest, forkJoin, Observable} from "rxjs";
import {concatMap, map, switchMap, tap} from "rxjs/operators";
import {UserRepo} from "../../../shared/models/user-repo.interface";
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
    this.userService.limit().subscribe()
    this.users$ = this.userService.pipeUsers(this.userService.getUsers());
  }

  findUsers(searchText: string) {
    this.users$ = this.userService.pipeUsers(this.userService.searchUsers(searchText).pipe(
      map((resp: any) => resp.items)
    )).pipe(
      tap(users => {
        // if you search for a specific user application redirects the user page
        if (users.length == 1) {
          this.router.navigate(['/users', users[0].login])
        }
      })
    )
  }

  viewList() {
    this.view = 'list';
    this.listItems.map((item) => item.view = this.view);
  }

  viewGrid() {
    this.view = 'grid';
    this.listItems.map((item) => item.view = this.view);
  }
}
