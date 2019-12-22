import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',

})
export class ClassroomService {
  readonly rootURL='https://eflearning.azurewebsites.net';

  constructor(private http: HttpClient, private toastr: ToastrService ) { }

  postClassroom(formData){
    return this.http.post(this.rootURL +'/api/GivenClassroom/Create', formData);
  }
  getCurrentUser(id){
      return this.http.get(this.rootURL + '/api/User/GetUserByIdWithRoleAsync/'+ id);
  }
  // getClassroom(){
  //   return this.http.get(this.rootURL +'/api​/GivenClassroom​/GetClassrooms​/');

  // }
}
