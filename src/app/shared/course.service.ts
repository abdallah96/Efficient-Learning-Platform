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

  postClass(){

    return this.http.post(this.rootURL +'/api/Course/Create', this.formData);
  }
  getAllCourses(){
    this.http.get(this.rootURL + '/api/Course/GetAll')
    .toPromise().then(res=> this.list = res as Course[]);
  }
  UpdateCourse(){
    return this.http.put(this.rootURL +'/api/Course/Update', this.formData);
  }
  DeleteCourse(id: string){
    return this.http.delete(this.rootURL +'/api/Course/Delete/'+id);
  }
}
