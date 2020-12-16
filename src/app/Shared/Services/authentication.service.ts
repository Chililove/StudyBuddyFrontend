import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'})

export class AuthenticationService {
  // private currentUserSubject: BehaviorSubject<User>;
  // public currentUser: Observable<User>;
  constructor(private http: HttpClient) {
    // this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    // this.currentUser = this.currentUserSubject.asObservable();
  }

  // public get currentUserValue(): User {
  // return this.currentUserSubject.value;
  // }
  login(username: string, password: string): Observable<boolean> {
    return this.http.post<any>(environment.apiUrl + '/token', {username, password})
      .pipe(map(response => { debugger;
        const token = response.token;
        // login successful if there's a jwt token in the response
        if (token) {
          // store username and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify({username, token}));
          // this is from tutorial (user)
          // this.currentUserSubject.next(response);
          // return true to indicate successful login
          return response; // true;
        } else {
          // return false to indicate failed login
          return false;
        }
      }));
  }

  getToken(): string {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
      return currentUser.token;
    } else {
      return null;
    }
  }

  getUsername(): string {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
      return currentUser.username;
    } else {
      return null;
    }
  }

  logout(): void {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    // this.currentUserSubject.next(null);
  }

  isAdmin(): boolean {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    return currentUser.role === 'Administrator';
  }
}
