import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {User} from "../models/user.model";
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";
import {environment} from "../../../environments/environment";
import {UserRepo} from "../models/user-repo.model";
import {UserOrg} from "../models/user-org.model";
import {UserView} from "../models/user-view.model";
import {UserOrgView} from "../models/user-org-view.model";

@Injectable({
  providedIn: 'root'
})
export class GhUserService {
  readonly url = environment.URL;

  constructor(private http: HttpClient) {
  }

  // GET all users
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.url}users?per_page=10`).pipe(
      retry(1),
      catchError(this.handleError),
    )
  }

  // GET user by username
  getUser(username: string): Observable<UserView> {
    return this.http.get<UserView>(`${this.url}users/${username}`).pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // GET user's repositories by username
  getUserRepos(username: string): Observable<UserRepo[]> {
    return this.http.get<UserRepo[]>(`${this.url}users/${username}/repos`).pipe(
      retry(1),
      catchError(this.handleError),
    )
  }

  // GET user's organizations by username
  getUserOrgs(username: string): Observable<UserOrg[]> {
    return this.http.get<UserOrg[]>(`${this.url}users/${username}/orgs`).pipe(
      retry(1),
      catchError(this.handleError),
    )
  }

  // GET specific organization
  getUserOrgDetails(orgName: string): Observable<UserOrgView> {
    return this.http.get<UserOrgView>(`${this.url}orgs/${orgName}`).pipe(
      retry(1),
      catchError(this.handleError),
    )
  }

  // Search users
  searchUsers(queryStr: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.url}search/users?q=${queryStr}&per_page=5`).pipe(
      retry(1),
      catchError(this.handleError),
    )
  }

  private handleError(error: HttpErrorResponse) {
    let msg;
    if (error.error instanceof ErrorEvent) {
      msg = `Error: ${error.error.message}`;
    } else {
      msg = `Error: ${error.message}`;
    }
    return throwError(msg);
  }
}
