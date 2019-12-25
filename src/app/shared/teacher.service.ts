import { Injectable } from '@angular/core';
import { Teacher } from './teacher.model';
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  formData: Teacher;
  list:Teacher[]; 
  readonly rootURL='https://eflearning.azurewebsites.net';

  constructor(private http: HttpClient) { }

  CreateTeacher(formData: Teacher){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    };
    return this.http.post(this.rootURL +'/api/User/CreateTeacher', formData,httpOptions);
  }

  UpdateTeacher(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    };
    return this.http.put(this.rootURL +'/api/User/UpdateUser', this.formData,httpOptions);
  }
  deleteTeacher(id){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    };
    return this.http.delete(this.rootURL +'/api/User/DeleteUser/'+ id,httpOptions)
  }
  GetAllTeachers(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    };
    this.http.get(this.rootURL + '/api/User/GetAllTeachers',httpOptions)
    .toPromise().then(res=> this.list = res as Teacher[]);
  }

}
