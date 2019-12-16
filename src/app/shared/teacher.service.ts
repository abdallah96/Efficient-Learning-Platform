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

  GetAllTeachers(){
    this.http.get(this.rootURL + '/api/User/GetAllTeachers')
    .toPromise().then(res=> this.list = res as Teacher[]);
  }
}
