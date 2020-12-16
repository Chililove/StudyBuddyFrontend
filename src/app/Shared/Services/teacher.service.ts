import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Teacher} from '../Models/teacher.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'})

export class TeacherService {
  constructor(private http: HttpClient) {
  }

// Create
  create(teacher: Teacher): Observable<Teacher> {
    return this.http.post<Teacher>('https://localhost:51961/api/user', teacher);
  }

  // GetAllAdmins
  getTeachers(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>('https://localhost:51961/api/user'); // check
    // add authorization header with jwt token
    //  httpOptions.headers =
    //   httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());
    // get users from api
    // return this.http.get<Teacher[]>(environment.apiUrl + '/teacher/', httpOptions);
  }

  // GetCats byID
  findById(id: number): Observable<Teacher> {
    return this.http.get<Teacher>('https://localhost:51961/api/user/' + id);
  }

  // Delete by ID
  delete(id: number): Observable<Teacher> {
    return this.http.delete<Teacher>('https://localhost:51961/api/user/' + id);
  }

  // Add Edit Teachers Here:
  // Update by ID
  /*
  update(id: number, teacher: Teacher): Observable<Teacher> {
    // return this.http.put<Teacher>('environment.apiUrl + '/api/user/'' + id);
    return this.http.put<Teacher>(environment.apiUrl + '/api/user/' + id, {
      name: teacher.name,
      username: teacher.username,
      email: teacher.email,
    });
  }

   */
}
