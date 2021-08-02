import {Component, Input, OnInit} from '@angular/core';
import {UserView} from "../../../shared/models/user-view.model";
import {GhUserService} from "../../../shared/services/gh-user.service";
import {map, mergeMap} from "rxjs/operators";
import {User} from "../../../shared/models/user.model";
import {Observable} from "rxjs";
import {UserRepo} from "../../../shared/models/user-repo.model";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input() user!: User;
  @Input() view: "list" | "grid" = "list";
  user$!: Observable<UserView>;

  constructor(private userService: GhUserService) {
  }

  ngOnInit(): void {
    this.user$ = this.userService.getUser(this.user.login).pipe(
      // get repos for each user
      mergeMap((user: UserView) => {
        return this.userService.getUserRepos(user.login).pipe(
          map((repos: UserRepo[]) => {
              const firstThreeRepos = repos.slice(0, 3).sort((a, b) => a.name.length - b.name.length)
              return { ...user, repos: firstThreeRepos }
            }
          )
        )
      })
    )
  }

}
