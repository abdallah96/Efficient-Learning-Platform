import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Student } from './student.model';
import { TakenClassroom } from './taken-classroom.model';
import { Classroom } from './classroom.model';

@Injectable({
  providedIn: 'root',

})
export class ClassroomService {
  readonly rootURL='https://eflearning.azurewebsites.net';
  list: Student[];
  formData: TakenClassroom;
  classes: Classroom[];
  searchValue;

  constructor(private http: HttpClient, private toastr: ToastrService ) { }
  
  getClassroom(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    };
    return this.http.get(this.rootURL +'/api/GivenClassroom/GetClassrooms',httpOptions);
  }
  getAllClassroom(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    };
    return this.http.get(this.rootURL +'/api/GivenClassroom/GetAll',httpOptions);
  }

  getStudents(id){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    };
    return this.http.get(this.rootURL +'/api​/GivenClassroom​/GetStudents​/'+id,httpOptions);
  }

  postClassroom(formData){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    };
    return this.http.post(this.rootURL +'/api/GivenClassroom/Create', formData,httpOptions);
  }
  joinClassroom(formData){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    };
    return this.http.post(this.rootURL +'/api/TakenClassroom/Create', formData,httpOptions);
  }

  UpdateClassroom(formData){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    };
    return this.http.put(this.rootURL +'/api/GivenClassroom/Update', formData,httpOptions);
  }

  deleteClassroom(id:number){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    };
    return this.http.delete(this.rootURL +'/api/GivenClassroom/Delete/'+id,httpOptions);
  }
  takenClassroom(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    };
    return this.http.get(this.rootURL +'/api/TakenClassroom/GetClassrooms',httpOptions);
  }
  givenClassroom(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    };
    return this.http.get(this.rootURL +'/api/GivenClassroom/GetClassrooms',httpOptions);
  }
  findClassroom(searchValue){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    };
    return this.http.get(this.rootURL +'/api/GivenClassroom/FindAClassroom/'+ searchValue,httpOptions);
  }
  

 
}
