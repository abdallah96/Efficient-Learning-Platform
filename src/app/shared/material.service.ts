import { Injectable } from '@angular/core';
import { Material } from './material.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MaterialAnswer } from './material-answer.model';
import { Announcement } from './announcement.model';
import { GivePoint } from './give-point.model';
import { Comment } from './comment.model';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {
formData : Material;
announcement : Announcement;
fd : MaterialAnswer;
list: Material[];
comment:Comment;
point:GivePoint;
readonly rootURL='https://eflearning.azurewebsites.net';
  constructor(private http: HttpClient) { }

  postMaterial(formData){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    };
    console.log(formData);
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
    return this.http.get(this.rootURL +'/api/Common/GetUserSuccess',httpOptions);
  }
  studentSuccess(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    };
    return this.http.get(this.rootURL +'/api/Common/GetUserSuccess',httpOptions);
  }
  studentCount(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    };
    return this.http.get(this.rootURL +'/api/GivenClassroom/GetStudentsCount',httpOptions);
  }
  materialCount(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    };
    return this.http.get(this.rootURL +'/api/Material/GetResponsibleMaterialsCount',httpOptions);
  }
  doneMaterialCount(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    };
    return this.http.get(this.rootURL +'/api​/MaterialAnswer​/GetDoneMaterialCount',httpOptions);
  }
  joinedCount(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    };
    return this.http.get(this.rootURL +'/api/TakenClassroom/GetJoinedCount',httpOptions);
  }
  getAnnouncement(id){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    };
    return this.http.get(this.rootURL +'/api/Announcement/GetAll/'+id,httpOptions);
  }
  givePoint(obj){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    };
    return this.http.put(this.rootURL +'/api/MaterialAnswer/GivePoint', obj, httpOptions);
  }
  getScoreList(id){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    };
    return this.http.get(this.rootURL + '/api/MaterialAnswer/GetScoreList/'+ id,httpOptions);
  }
  getClassroomMaterials(id){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    };
    return this.http.get(this.rootURL + '/api/Material/GetMaterials/' + id, httpOptions);
  }
  getMaterialAnswers(id){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    };
    return this.http.get(this.rootURL + '/api/MaterialAnswer/GetMaterialAnswers/' + id, httpOptions);
  }
  getMaterialDetails(id){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    };
    return this.http.get(this.rootURL + '/api/Material/GetMaterialDetail/' + id, httpOptions);
  }
}
