import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {User} from "../models/user.interface";
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class GhUserService {
  url = environment.URL;

  constructor(private http: HttpClient) {
  }

  getUser(username: string): Observable<User> {
    return this.http.get<User>(`${this.url}users/${username}`).pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.url}users`).pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  private handleError(error: HttpErrorResponse) {
    return throwError(error.message);
  }
}
