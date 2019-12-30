import { Component, OnInit } from '@angular/core';
import { MaterialService } from '../shared/material.service';
import { ToastrService } from 'ngx-toastr';
import { ClassroomService } from '../shared/classroom.service';
import { UserService } from '../shared/user.service';
import { NgForm } from '@angular/forms';
import { Classroom } from '../shared/classroom.model';
import { Material } from '../shared/material.model';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.css']
})
export class MaterialsComponent implements OnInit {
userDetails;
notifications;
freshMaterial;
classroom =[];
materialForms=[];

  constructor(private service: MaterialService, private toastr: ToastrService,private classroomService : ClassroomService,private user: UserService) { }

  ngOnInit() {
    this.resetForm();
    this.getMaterial();
    this.user.getCurrentUser().subscribe(
      res=>{
        this.userDetails = res;
      }
    );
    
  }
  resetForm(form ?: NgForm){
    if(form != null)
    form.resetForm();
    this.service.formData ={
      givenClassroomId: 0,
      materialType: 0,
      materialScale: 0,
      question: '',
      hint: '',
      description: '',
      deadline: new Date()
    }
  }
  recordSubmit(material:Material) {
    console.log(material);
      this.service.UpdateMaterial(material).subscribe(
        res=>{
        this.toastr.success('Classroom was updated sucessfully'),
        err =>{
          console.log(err);
        }
        
      });
    }
    onDelete(id){
      console.log(id);
      this.service.deleteMaterial(id).subscribe(res =>{
        this.toastr.warning('The classroom has been deleted')
      },
        err=>{
          console.log(err)
        })
    }
  getMaterial(id ?: Number){
    this.service.getMaterial(id)
    .subscribe(res => this.classroom = res as []);
    
  }

}
