import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {User} from "../models/user.interface";
import {combineLatest, Observable, throwError} from "rxjs";
import {catchError, concatMap, finalize, map, retry, switchMap, tap} from "rxjs/operators";
import {environment} from "../../../environments/environment";
import {UserRepo} from "../models/user-repo.interface";
import {UserOrg} from "../models/user-org.interface";

@Injectable({
  providedIn: 'root'
})
export class GhUserService {
  readonly url = environment.URL;
  loading: boolean = false;

  constructor(private http: HttpClient) {
  }

  // GET all users
  getUsers(): Observable<User[]> {
    this.loading = true;
    return this.http.get<User[]>(`${this.url}users?per_page=10`).pipe(
      retry(1),
      catchError(this.handleError),
      finalize(() => this.loading = false)
    )
  }

  // GET user by username
  getUser(username: string): Observable<User> {
    return this.http.get<User>(`${this.url}users/${username}`).pipe(
      retry(1),
      catchError(this.handleError),
      finalize(() => this.loading = false)
    )
  }

  // GET user's repositories by username
  getUserRepos(username: string): Observable<UserRepo[]> {
    return this.http.get<UserRepo[]>(`${this.url}users/${username}/repos`).pipe(
      retry(1),
      catchError(this.handleError),
      finalize(() => this.loading = false)
    )
  }

  // GET user's organizations by username
  getUserOrgs(username: string): Observable<UserOrg[]> {
    return this.http.get<UserOrg[]>(`${this.url}users/${username}/orgs`).pipe(
      retry(1),
      catchError(this.handleError),
      finalize(() => this.loading = false)
    )
  }

  getUserOrgDetails(orgName: string): Observable<UserOrg> {
    return this.http.get<UserOrg>(`${this.url}orgs/${orgName}`).pipe(
      retry(1),
      catchError(this.handleError),
      finalize(() => this.loading = false)
    )
  }

  // Search users
  searchUsers(queryStr: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.url}search/users?q=${queryStr}&per_page=5`).pipe(
      retry(1),
      catchError(this.handleError),
      finalize(() => this.loading = false)
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
      switchMap((users: User[]) =>
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
    let msg;
    if (error.error instanceof ErrorEvent) {
      msg = `Error: ${error.error.message}`;
    } else {
      msg = `Error: ${error.message}`;
    }
    return throwError(msg);
  }
}
