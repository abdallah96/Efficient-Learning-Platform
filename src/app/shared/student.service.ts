import { Injectable } from '@angular/core';
import { Student } from './student.model';
import {HttpClient} from '@angular/common/http'
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
    return this.http.post(this.rootURL +'/api/User/CreateStudent', formData);
  }
  GetAllStudents(){
    this.http.get(this.rootURL + '/api/User/GetAllStudents')
    .toPromise().then(res=> this.list = res as Student[]);
  }
}
