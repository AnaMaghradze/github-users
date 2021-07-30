import {Component, Input} from '@angular/core';
import {UserView} from "../../../shared/models/user-view.model";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  @Input() user!: UserView;
  @Input() view: "list" | "grid" = "list";
}
