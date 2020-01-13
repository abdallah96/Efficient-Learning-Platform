import { Component, OnInit } from '@angular/core';
import { ClassroomService } from '../shared/classroom.service';
import { UserService } from '../shared/user.service';
import { MaterialService } from '../shared/material.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-taken-classroom',
  templateUrl: './taken-classroom.component.html',
  styleUrls: ['./taken-classroom.component.css']
})
export class TakenClassroomComponent implements OnInit {
  success;
  classrooms = [];
  userDetails;
  constructor(private classroomService : ClassroomService, private userService : UserService, private materialService : MaterialService, private toastr: ToastrService) { }

  ngOnInit() {
    this.classroomService.getAllClassroom().subscribe(res => {
      this.classrooms = res as [];
    });

    this.userService.getCurrentUser().subscribe(res => {
      this.userDetails = res;
    });

    this.materialService.studentSuccess().subscribe(
      res =>{
        this.success = res;
    });
  }
  
  joinClass(classId) {
    let obj = { givenClassroomId: classId };
    this.classroomService.joinClassroom(obj).subscribe(
      res => {
        this.success = res;
      },
      err => {
        console.error(err);
        if(err.status === 400) {
          this.toastr.error('You are already enrolled in the class.');
        }
      }
    );
  }
}
