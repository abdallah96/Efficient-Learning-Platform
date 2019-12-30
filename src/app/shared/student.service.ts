import { Injectable } from '@angular/core';
import { Student } from './student.model';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
formData : Student;
list: Student[];
readonly rootURL='https://eflearning.azurewebsites.net';

  constructor(private http: HttpClient) { }
  postStudent(formData:StudentService){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    };
    return this.http.post(this.rootURL +'/api/User/CreateStudent', formData,httpOptions);
  }
  DeleteStudent(id){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    };
    return this.http.delete(this.rootURL +'/api/User/DeleteUser/'+id, httpOptions);
  }
  GetAllStudents(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    };
    this.http.get(this.rootURL + '/api/User/GetAllStudents',httpOptions)
    .toPromise().then(res=> this.list = res as Student[]);
  }
  UpdateStudent(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    };
    return this.http.put(this.rootURL +'/api/User/UpdateUser', this.formData,httpOptions);
  }
  
}
