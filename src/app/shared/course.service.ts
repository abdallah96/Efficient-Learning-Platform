import { Injectable } from '@angular/core';
import { Course } from './course.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
formData : Course;
list: Course[];
readonly rootURL='https://eflearning.azurewebsites.net';
  constructor(private http: HttpClient) { }

  postClass(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    };
    return this.http.post(this.rootURL +'/api/Course/Create', this.formData,httpOptions);
  }
  // get list for classroom
  getCourseList(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    };
    return this.http.get(this.rootURL + '/api/Course/GetAll',httpOptions);
  }
  //
  getAllCourses(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    };
    this.http.get(this.rootURL + '/api/Course/GetAll',httpOptions)
    .toPromise().then(res=> this.list = res as Course[]);
  }
  UpdateCourse(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    };
    return this.http.put(this.rootURL +'/api/Course/Update', this.formData,httpOptions);
  }
  DeleteCourse(id: string){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    };
    return this.http.delete(this.rootURL +'/api/Course/Delete/'+id,httpOptions);
  }
}
