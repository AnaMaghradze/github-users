import {Component, Input} from '@angular/core';
import {User} from "../../../shared/models/user.interface";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  @Input() user!: User;
  @Input() view: "list" | "grid" = "list";
}
