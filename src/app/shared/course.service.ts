import { Injectable } from '@angular/core';
import { Course } from './course.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
formData : Course;
list: Course[];
readonly rootURL='https://eflearning.azurewebsites.net';
  constructor(private http: HttpClient) { }

  postClass(formData : CourseService){

    return this.http.post(this.rootURL +'/api/Course/Create', formData);
  }
  getAllCourses(){
    this.http.get(this.rootURL + '/api/Course/GetAll')
    .toPromise().then(res=> this.list = res as Course[]);
  }
}
