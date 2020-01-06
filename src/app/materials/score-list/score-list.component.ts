import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { CourseService } from 'src/app/shared/course.service';
import { ClassroomService } from 'src/app/shared/classroom.service';
import { MaterialService } from 'src/app/shared/material.service';

@Component({
  selector: 'app-score-list',
  templateUrl: './score-list.component.html',
  styleUrls: ['./score-list.component.css']
})
export class ScoreListComponent implements OnInit {
  classes = [];
  classrooms = [];
  success;
  userDetails;

  constructor( private user : UserService, private service : ClassroomService, private materialService :MaterialService) { }

  ngOnInit() {
    this.user.getCurrentUser().subscribe(
      res=>{
        this.userDetails = res;
      }
    );
    this.materialService.UserSuccess()
    .subscribe(res =>{
            this.success = res
    });
    this.service.takenClassroom().subscribe(res => {
      console.log(res);
      this.classrooms = res as [];
      this.classrooms.forEach(classroom => {
        this.scoreList(classroom.givenClassroomId, classroom.courseName);
      });
    });
    if(this.classrooms.length == 0) {
      this.service.givenClassroom().subscribe(res => {
        console.log(res);
        this.classrooms = res as [];
        this.classrooms.forEach(classroom => {
          this.scoreList(classroom.id, classroom.description);
        });
      });
    }
  }

  scoreList(id?:UserService, courseName?:String) {
    console.log(id);
    this.materialService.getScoreList(id).subscribe(res => {
      this.classes.push({course: courseName, scores: res as []});
    });
  }
}