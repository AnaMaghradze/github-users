import { Component, OnInit } from '@angular/core';
import {GhUserService} from "../../../shared/services/gh-user.service";
import {Observable} from "rxjs";
import {User} from "../../../shared/models/user.interface";
import {switchMap} from "rxjs/operators";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  user$!: Observable<User>;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private userService: GhUserService) { }

  ngOnInit(): void {
    this.user$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
      {
        console.log(params)
        return this.userService.getUser(params.get('username')!)
      })
    );
  }
}
