import { Injectable } from '@angular/core';
import { Material } from './material.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {
formData : Material;
readonly rootURL='https://eflearning.azurewebsites.net';
  constructor(private http: HttpClient) { }

  postMaterial(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    };
    return this.http.post(this.rootURL +'/api/Material/Create', this.formData,httpOptions);
  }
  getClassroom(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    };
    return this.http.get(this.rootURL +'/api/GivenClassroom/GetAll',httpOptions);
  }
}
