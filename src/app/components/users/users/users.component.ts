import { Component, OnInit } from '@angular/core';
import {GhUserService} from "../../../shared/services/gh-user.service";
import {User} from "../../../shared/models/user.interface";
import {Observable} from "rxjs";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users!: Observable<User[]>;
  constructor(private userService: GhUserService) { }

  ngOnInit(): void {
    this.users = this.userService.getUsers();
  }

}
