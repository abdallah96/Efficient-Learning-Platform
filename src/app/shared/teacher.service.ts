import { Injectable } from '@angular/core';
import { Teacher } from './teacher.model';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  formData: Teacher;
  list:Teacher[]; 
  readonly rootURL='https://eflearning.azurewebsites.net';

  constructor(private http: HttpClient) { }

  CreateTeacher(formData: Teacher){
    return this.http.post(this.rootURL +'/api/User/CreateTeacher', formData);
  }

  UpdateTeacher(formData: Teacher){
    return this.http.put(this.rootURL +'/api/User/UpdateUser'+formData.id, formData);
  }
  deleteTeacher(id){
    return this.http.delete(this.rootURL +'/api/User/DeleteUser/{userId}'+ id)
  }
  GetAllTeachers(){
    this.http.get(this.rootURL + '/api/User/GetAllTeachers')
    .toPromise().then(res=> this.list = res as Teacher[]);
  }

}
