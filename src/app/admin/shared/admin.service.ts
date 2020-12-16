import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Admin} from './admin.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'})

export class AdminService {
  constructor(private http: HttpClient) {
  }

// Create
  create(admin: Admin): Observable<Admin> {
    return this.http.post<Admin>('https://localhost:51961/api/user', admin);
  }

  // GetAllAdmins
  getAdmins(): Observable<Admin[]> {
     return this.http.get<Admin[]>('https://localhost:51961/api/user'); // check
    // add authorization header with jwt token
    //  httpOptions.headers =
   //   httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());
    // get users from api
   // return this.http.get<Admin[]>(environment.apiUrl + '/admins/', httpOptions);
  }

  // GetCats byID
  findById(id: number): Observable<Admin> {
    return this.http.get<Admin>('https://localhost:51961/api/user/' + id);
  }

  // Delete by ID
  delete(id: number): Observable<Admin> {
    return this.http.delete<Admin>('https://localhost:51961/api/user/' + id);
  }

  // Add Edit Cats Here:
  // Update by ID
  /*
  update(id: number, admin: Admin): Observable<Admin> {
    // return this.http.put<Cat>('environment.apiUrl + '/api/cats/'' + id);
    return this.http.put<Admin>(environment.apiUrl + '/api/admins/' + id, {
      name: admin.name,
      username: admin.username,
      email: admin.email,
    });
  }

   */
}
