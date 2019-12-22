import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, Validators, FormGroup, NgForm } from '@angular/forms';
import { CourseService } from '../shared/course.service';
import { ClassroomService } from '../shared/classroom.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.component.html',
  styleUrls: ['./classroom.component.css']
})
export class ClassroomComponent implements OnInit {
  currentUserDetails = {};
  classroomForms  = [];
  classroomList = [];
  constructor(private loginComponent: LoginComponent, private courseService : CourseService, private service:ClassroomService,) {
    this.currentUserDetails = loginComponent.userDetails;
    console.log(loginComponent);
    console.log(this.currentUserDetails);
  }

  ngOnInit() {
    this.courseService.getCourseList()
    .subscribe(res => this.classroomList = res as []);
    this.addClassroomForm();
  }

  addClassroomForm(){
    this.classroomForms.push({
      courseId: 0,
      userId: 0,
      description: ''
    });
  }
  recordSubmit(fg) {
    console.log(fg);
    this.service.postClassroom(fg)
    .subscribe(
      (res:any)=>{
        console.log(res);
        // fg.patchValue({id: res.id})
      }
    )
  }
}
