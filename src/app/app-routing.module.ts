import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersComponent} from "./components/users/users/users.component";
import {UserDetailsComponent} from "./components/users/user-details/user-details.component";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'users/:username', component: UserDetailsComponent },
  { path: 'user-not-found', component: PageNotFoundComponent },
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
