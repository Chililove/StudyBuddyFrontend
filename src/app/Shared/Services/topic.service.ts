import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Topic} from '../Models/topic.model';
import {environment} from '../../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'})

export class TopicService {
  topicApiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

// Create
  create(topic: Topic): Observable<Topic> {
    return this.http.post<Topic>('https://localhost:51961/api/topic', topic);
  }


  // GetAllAdmins
  getTopics(): Observable<Topic[]> {
    return this.http.get<Topic[]>('https://localhost:51961/api/topic'); // check
    // add authorization header with jwt token
    //  httpOptions.headers =
    //   httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());
    // get users from api
    // return this.http.get<Topic[]>(environment.apiUrl + '/topic/', httpOptions);
  }

  // GetCats byID
  findById(id: number): Observable<Topic> {
    return this.http.get<Topic>('https://localhost:51961/api/topic/' + id);
  }

  // Delete by ID
  delete(id: number): Observable<Topic> {
    return this.http.delete<Topic>('https://localhost:51961/api/topic/' + id);
  }

  // Add Edit Topic Here:
  // Update by ID
  /*
  update(id: number, topic: Topic): Observable<Topic> {
    // return this.http.put<Topic>('environment.apiUrl + '/api/topic/'' + id);
    return this.http.put<Topic>(environment.apiUrl + '/api/topic/' + id, {
      name: topic.name,
      username: topic.username,
      email: topic.email,
    });
  }

   */
}
