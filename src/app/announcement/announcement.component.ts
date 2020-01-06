import { Component, OnInit } from '@angular/core';
import { MaterialService } from '../shared/material.service';
import { ToastrService } from 'ngx-toastr';
import { ClassroomService } from '../shared/classroom.service';
import { UserService } from '../shared/user.service';
import { StudentService } from '../shared/student.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.css']
})
export class AnnouncementComponent implements OnInit {

userDetails;
success;
classroom =[];
materialForms=[];

  constructor(private service: MaterialService, private toastr: ToastrService,private classroomService : ClassroomService,private user: UserService, private student: StudentService) { }

  ngOnInit() {
    this.resetForm();
    this.classroomService.getClassroom()
    .subscribe(res => this.classroom = res as []);
    this.user.getCurrentUser().subscribe(
      res=>{
        this.userDetails = res;
      }
    );
    this.service.UserSuccess()
    .subscribe(res =>{
            this.success = res
    });
    
  }
  resetForm(form ?: NgForm){
    if(form != null)
    form.resetForm();
    this.service.announcement ={
      givenClassroomId: 0,
      description: '',
    }
  }
  onSubmit(form: NgForm){
    // if(this.service.formData.id == 0)
    console.log(form);
    this.insertRecord(form);
    // else
    // this.updateRecord(form);
  }
  insertRecord(form: NgForm){
    this.service.postMaterial(form.value).subscribe(
      res=>{
        this.resetForm(form);
        this.toastr.success('Announcement was created Successfully')
      },
      err =>{
      this.toastr.error(err.error+'Failure')  
    })
  }

}
