import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, Validators, FormGroup, NgForm } from '@angular/forms';
import { CourseService } from '../shared/course.service';
import { ClassroomService } from '../shared/classroom.service';
import { LoginComponent } from '../login/login.component';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.component.html',
  styleUrls: ['./classroom.component.css']
})
export class ClassroomComponent implements OnInit {
  currentUserDetails = {};
  classroomForms  = [];
  Course = [];
  constructor(private loginComponent: LoginComponent, private courseService : CourseService, private service:ClassroomService, private toastr: ToastrService) {
    this.currentUserDetails = loginComponent.userDetails;
    console.log(loginComponent);
    console.log(this.currentUserDetails);
  }

  ngOnInit() {
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
              courseId: [classroom.courseId],
              description: [classroom.description],
            });
          })
        }
      }
    )
  }

  addClassroomForm(){
    this.classroomForms.push({
      courseId: [0],
      description: '',
    });
  }
  recordSubmit(classroom:FormGroup) {
    // if(classroom.value.courseId == 0)
      console.log(classroom);
      this.service.postClassroom(classroom).subscribe(
        (res:any)=> {
          console.log(res);
          this.toastr.success('Classroom was created sucessfully'),
          classroom.patchValue({courseId: res.courseId});
      });
      // else
      // this.service.UpdateClassroom(classroom.value).subscribe(
      //   res=>{
      //   this.toastr.success('Classroom was updated sucessfully'),
      //   err =>{
      //     console.log(err);
      //   }
        
      // });
    }
    onDelete(id){
      this.service.deleteClassroom(id).subscribe(res =>{
        this.toastr.warning('The classroom has been deleted')
      },
        err=>{
          console.log(err)
        })
    }
  }
