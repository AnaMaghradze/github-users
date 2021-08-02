import {Component, OnInit} from '@angular/core';
import {GhUserService} from "../../../shared/services/gh-user.service";
import {combineLatest, Observable} from "rxjs";
import {map, mergeMap, switchMap} from "rxjs/operators";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {UserOrg} from "../../../shared/models/user-org.model";
import {UserRepo} from "../../../shared/models/user-repo.model";
import {UserView} from "../../../shared/models/user-view.model";
import {UserOrgView} from "../../../shared/models/user-org-view.model";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  user$!: Observable<UserView>;
  orgs$!: Observable<UserOrgView[]>;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private userService: GhUserService) {
  }

  ngOnInit(): void {
    this.user$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        return this.userService.getUser(params.get('username')!)
      }),
      // get repos for each user
      mergeMap((user: UserView) => this.userService.getUserRepos(user.login).pipe(
        map((repos: UserRepo[]) => {
          const firstThreeRepos = repos.slice(0, 3).sort(
            (a, b) => a.name.length - b.name.length);
          return {...user, repos: firstThreeRepos};
        })
      )),
      // get orgs for each user
      mergeMap((user: UserView) => this.userService.getUserOrgs(user.login).pipe(
        map((orgs: UserOrg[]) => {
          this.orgs$ = combineLatest(orgs.slice(0, 3).map((org: UserOrg) => this.userService.getUserOrgDetails(org.login)));
          return {...user, orgs};
        }),
      ))
    );
  }

  goToUsers(): void {
    this.router.navigate(['/users']);
  }
}

