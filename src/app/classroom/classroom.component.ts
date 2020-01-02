import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, Validators, FormGroup, NgForm } from '@angular/forms';
import { CourseService } from '../shared/course.service';
import { ClassroomService } from '../shared/classroom.service';
import { LoginComponent } from '../login/login.component';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { UserService } from '../shared/user.service';
import { Classroom } from '../shared/classroom.model';
import { Material } from '../shared/material.model';
import { MaterialService } from '../shared/material.service';

@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.component.html',
  styleUrls: ['./classroom.component.css']
})
export class ClassroomComponent implements OnInit {
  userDetails;
  currentUserDetails = {};
  classroomForms  = [];
  Course = [];
  success;
  constructor(private loginComponent: LoginComponent, private courseService : CourseService, private service : ClassroomService, private toastr: ToastrService, private user: UserService, private succes: MaterialService) {
    this.currentUserDetails = loginComponent.userDetails;
    console.log(loginComponent);
    console.log(this.currentUserDetails);
  }

  ngOnInit() {
    this.user.getCurrentUser().subscribe(
      res=>{
        this.userDetails = res;
      }
    );
    this.succes.UserSuccess()
    .subscribe(res =>{
            this.success = res
    });
    this.courseService.getCourseList()
    .subscribe(res => this.Course = res as []);
    this.service.getClassroom().subscribe(
      res=>{
        if(res ==[])
        this.addClassroomForm();
        else{
          //generate formArray as per the data received from classroom table
          (res as []).forEach((classroom: any)=>{
            this.classroomForms.push({
              id: classroom.id,
              courseId: classroom.courseId,
              description: classroom.description,
            });
          })
        }
      }
    )
  }

  addClassroomForm(){
    this.classroomForms.push({
      courseId: 0,
      description: '',
    });
  }
  get(fg: FormGroup){
    (res:any)=>{
      fg.patchValue({courseId: res.courseId});
    }

  }
  recordSubmit(classroom:Classroom) {
    console.log(classroom);
    if(classroom.id == 0)
      this.service.postClassroom(classroom).subscribe(
        (res:any)=> {
          console.log(res);
          this.toastr.success('Classroom was created sucessfully');
          // classroom.patchValue({courseId: res.courseId});
      });
      else
      this.service.UpdateClassroom(classroom).subscribe(
        res=>{
        this.toastr.success('Classroom was updated sucessfully'),
        err =>{
          console.log(err);
        }
        
      });
    }
    onDelete(id){
      console.log(id);
      this.service.deleteClassroom(id).subscribe(res =>{
        this.toastr.warning('The classroom has been deleted')
      },
        err=>{
          console.log(err)
        })
    }
  }
