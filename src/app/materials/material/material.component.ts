import { Component, OnInit } from '@angular/core';
import { MaterialService } from 'src/app/shared/material.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm, Validators } from '@angular/forms';
import { ClassroomService } from 'src/app/shared/classroom.service';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit {
classroom =[];
  constructor(private service: MaterialService, private toastr: ToastrService,private classroomService : ClassroomService) { }

  ngOnInit() {
    this.resetForm();
    this.classroomService.getClassroom()
    .subscribe(res => this.classroom = res as []);
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
  onSubmit(form: NgForm){
    // if(this.service.formData.id == 0)
    this.insertRecord(form);
    // else
    // this.updateRecord(form);
  }
  insertRecord(form: NgForm){
    this.service.postMaterial().subscribe(
      res=>{
        this.resetForm(form);
        this.toastr.success('Material was created Successfully')
      },
      err =>{
      this.toastr.error(err.error+'Failure')  
    })
  }
}
