import {Component, OnInit} from '@angular/core';
import {GhUserService} from "../../../shared/services/gh-user.service";
import {User} from "../../../shared/models/user.interface";
import {combineLatest, forkJoin, Observable} from "rxjs";
import {concatMap, map, switchMap} from "rxjs/operators";
import {UserRepo} from "../../../shared/models/user-repo.interface";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users$!: Observable<User[]>;

  constructor(private userService: GhUserService) {
  }

  ngOnInit(): void {
    this.users$ = this.userService.getUsers().pipe(
      switchMap(
        (users: User[]) =>
          combineLatest(users.map((user: User) => this.userService.getUser(user.login)))
      ),
      // get repos for each user
      concatMap((users: User[]) =>
        combineLatest(users.map((user: User) => {
            return this.userService.getUserRepos(user.login).pipe(
              map(
                (repos: UserRepo[]) => {
                  user.repos = repos.sort((a, b) => a.name.length - b.name.length).slice(0, 3)
                  return user;
                })
            )
          }
        ))
      ))
  }
}
