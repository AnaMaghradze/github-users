import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersComponent} from "./components/users/users/users.component";
import {UserDetailsComponent} from "./components/users/user-details/user-details.component";

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'users/:username', component: UserDetailsComponent },
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
