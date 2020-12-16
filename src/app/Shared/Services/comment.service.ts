import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {TopicComment} from '../Models/topic-comment.model';
import {Topic} from '../Models/topic.model';
import {User} from '../Models/user.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'})

export class CommentService {
  constructor(private http: HttpClient) {
  }

// Create

  create(comment: { topic: Topic; mainBody: any; datePosted: Date; user: User }): Observable<Comment> {
    return this.http.post<Comment>('https://localhost:51961/api/comment', comment);
  }

  // GetAllAdmins
  getComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>('https://localhost:51961/api/comment'); // check

    // add authorization header with jwt token
    //  httpOptions.headers =
    //   httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());
    // get users from api
    // return this.http.get<Comment[]>(environment.apiUrl + '/comment/', httpOptions);
  }

  // GetCats byID
  findById(id: number): Observable<TopicComment> {
    return this.http.get<TopicComment>('https://localhost:51961/api/comment/' + id);
  }

  // Delete by ID
  delete(id: number): Observable<TopicComment> {
    return this.http.delete<TopicComment>('https://localhost:51961/api/comment/' + id);
  }

  // Add Edit Comment Here:
  // Update by ID
  /*
  update(id: number, comment: TopicComment): Observable<TopicComment> {
    // return this.http.put<Comment>('environment.apiUrl + '/api/comment/'' + id);
    return this.http.put<Comment>(environment.apiUrl + '/api/comment/' + id, {
      name: comment.name,
      username: comment.username,
      email: comment.email,
    });
  }

   */
}
