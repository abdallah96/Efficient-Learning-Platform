import { Injectable } from '@angular/core';
import { Comment } from './comment.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
comment: Comment;
readonly rootURL='https://eflearning.azurewebsites.net';

  constructor(private http: HttpClient) { }

  createComment(c){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    };
    return this.http.post(this.rootURL + '/api/Comment/Create', c, httpOptions);
  }
  getComments(id){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    };
    return this.http.get(this.rootURL +'/api/Comment/GetAll/'+id,httpOptions);
  }
}
