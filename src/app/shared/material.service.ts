import { Injectable } from '@angular/core';
import { Material } from './material.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MaterialAnswer } from './material-answer.model';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {
formData : Material;
fd : MaterialAnswer;
list: Material[];
readonly rootURL='https://eflearning.azurewebsites.net';
  constructor(private http: HttpClient) { }

  postMaterial(formData : MaterialService){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    };
    return this.http.post(this.rootURL +'/api/Material/Create', formData,httpOptions);
  }
  postMaterialAnswer(fd){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    };
    return this.http.post(this.rootURL +'/api/MaterialAnswer/Create', fd,httpOptions);
  }
  getClassroom(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    };
    return this.http.get(this.rootURL +'/api/GivenClassroom/GetAll',httpOptions);
  }
  getMaterial(id){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    };
    return this.http.get(this.rootURL +'/api/Material/GetMaterials/'+1,httpOptions);
  }
  deleteMaterial(id){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    };
    return this.http.delete(this.rootURL +'/api/Material/Delete/'+id,httpOptions);
  }
  UpdateMaterial(formData){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    };
    return this.http.put(this.rootURL +'/api/Material/Update', formData,httpOptions);
  }
  UserSuccess(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    };
    return this.http.get(this.rootURL +'/api/GivenClassroom/GetOwnCount',httpOptions);
  }
  studentSuccess(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    };
    return this.http.get(this.rootURL +'/api/MaterialAnswer/GetUserSuccess',httpOptions);
  }
  
}
