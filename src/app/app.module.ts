import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/users/user/user.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { LayoutComponent } from './components/layout/layout.component';
import { UserDetailsComponent } from './components/users/user-details/user-details.component';
import {HttpClientModule} from "@angular/common/http";
import { ListGridViewComponent } from './components/list-grid-view/list-grid-view.component';
import { UsersComponent } from './components/users/users/users.component';
import { TestComponent } from './components/test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SearchBarComponent,
    LayoutComponent,
    UserDetailsComponent,
    ListGridViewComponent,
    UsersComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
