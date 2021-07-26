import {Component, OnInit} from '@angular/core';
import {GhUserService} from "../../../shared/services/gh-user.service";
import {Observable} from "rxjs";
import {User} from "../../../shared/models/user.interface";
import {concatMap, map, switchMap} from "rxjs/operators";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {UserOrg} from "../../../shared/models/user-org.interface";
import {UserRepo} from "../../../shared/models/user-repo.interface";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  user$!: Observable<User>;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private userService: GhUserService) {}

  ngOnInit(): void {
    this.user$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        return this.userService.getUser(params.get('username')!).pipe(
          // get repos for each user
          concatMap((user: User) => this.userService.getUserRepos(user.login).pipe(
            map((repos: UserRepo[]) => {
              user.repos = repos.sort(
                (a, b) => a.name.length - b.name.length).slice(0, 3);
              return user;
            })
          )),
          // get orgs for each user
          concatMap((user: User) => this.userService.getUserOrgs(user.login).pipe(
            map((orgs: UserOrg[]) => {
              user.orgs = orgs.slice(0, 3);
              return user;
            })
          )),
        )
      })
    );
  }

  gotoUsers(user: User) {
    const username = user ? user.login : null;
    this.router.navigate(['/users', {username: username}]);
  }
}
