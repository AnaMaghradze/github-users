import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../../shared/models/user.interface";
import {GhUserService} from "../../../shared/services/gh-user.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input() user!: User;
  @Input() view: "list" | "grid" = "list";

  constructor(private userService: GhUserService) { }

  ngOnInit(): void {}
}
