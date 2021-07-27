import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {User} from "../models/user.interface";
import {combineLatest, Observable, throwError} from "rxjs";
import {catchError, concatMap, map, retry, switchMap, tap} from "rxjs/operators";
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

  // Search users
  searchUsers(queryStr: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.url}search/users?q=${queryStr}`).pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // Pipe users observable to transform each user to contain more details and array of repos
  pipeUsers(obs: Observable<User[]>): Observable<User[]> {
    return obs.pipe(
      // get more details for each user
      switchMap((users: User[]) =>
        combineLatest(users.map((user: User) => this.getUser(user.login)))
      ),
      // get repos for each user
      concatMap((users: User[]) =>
        combineLatest(users.map((user: User) => {
          return this.getUserRepos(user.login).pipe(
            map((repos: UserRepo[]) => {
                user.repos = repos.slice(0, 3).sort((a, b) => a.name.length - b.name.length)
                return user;
              }
            )
          )
        })))
    )
  }

  limit(){
    return this.http.get('https://api.github.com/rate_limit').pipe(
      tap( val => console.log(val))
    );
  }

  private handleError(error: HttpErrorResponse) {
    return throwError(error.message);
  }
}
