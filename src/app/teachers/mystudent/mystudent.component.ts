import { Component, OnInit } from '@angular/core';
import { ClassroomService } from 'src/app/shared/classroom.service';
import { UserService } from 'src/app/shared/user.service';
import { MaterialService } from 'src/app/shared/material.service';

@Component({
  selector: 'app-mystudent',
  templateUrl: './mystudent.component.html',
  styleUrls: ['./mystudent.component.css']
})
export class MystudentComponent implements OnInit {
  classes = [];
  classrooms = [];
  success;
  userDetails;
    constructor(private service: ClassroomService, private user: UserService, private userSucces: MaterialService) { }

  ngOnInit() {
    this.user.getCurrentUser().subscribe(
      res=>{
        this.userDetails = res;
      }
    );
    this.userSucces.UserSuccess()
    .subscribe(res =>{
            this.success = res
    });
    this.service.takenClassroom().subscribe(res => {
      console.log(res);
      this.classrooms = res as [];
      this.classrooms.forEach(classroom => {
        this.getStudents(classroom.givenClassroomId, classroom.courseName);
      });
    });
    if(this.classrooms.length == 0) {
      this.service.givenClassroom().subscribe(res => {
        console.log(res);
        this.classrooms = res as [];
        this.classrooms.forEach(classroom => {
          this.getStudents(classroom.id, classroom.description);
        });
      });
    }

  }
  getStudents(id?:UserService, courseName?:String) {
    console.log(id);
    this.user.getAllStudents(id).subscribe(res => {
      this.classes.push({course: courseName, students: res as []});
    });
  }
}
