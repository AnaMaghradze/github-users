import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {User} from "../models/user.interface";
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";
import {environment} from "../../../environments/environment";
import {UserRepo} from "../models/user-repo.interface";
import {UserOrg} from "../models/user-org.interface";

@Injectable({
  providedIn: 'root'
})
export class GhUserService {
  url = environment.URL;

  constructor(private http: HttpClient) {
  }

  // GET all users
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.url}users?per_page=10`).pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // GET user by username
  getUser(username: string): Observable<User> {
    return this.http.get<User>(`${this.url}users/${username}`).pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // GET user's repositories by username
  getUserRepos(username: string): Observable<UserRepo[]> {
    return this.http.get<UserRepo[]>(`${this.url}users/${username}/repos`).pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // GET user's organizations by username
  getUserOrgs(username: string): Observable<UserOrg[]> {
    return this.http.get<UserOrg[]>(`${this.url}users/${username}/orgs`).pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  private handleError(error: HttpErrorResponse) {
    return throwError(error.message);
  }
}
