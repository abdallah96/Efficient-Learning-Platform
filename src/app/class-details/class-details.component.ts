import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { ClassroomService } from '../shared/classroom.service';
import { MaterialService } from '../shared/material.service';

@Component({
  selector: 'app-class-details',
  templateUrl: './class-details.component.html',
  styleUrls: ['./class-details.component.css']
})
export class ClassDetailsComponent implements OnInit {
  classes = [];
  classrooms = [];
  success;
  userDetails;
  constructor( private user : UserService, private service : ClassroomService, private userSucces :MaterialService) { }

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
        this.getAllAnnouncement(classroom.givenClassroomId, classroom.courseName);
      });
    });
    if(this.classrooms.length == 0) {
      this.service.givenClassroom().subscribe(res => {
        console.log(res);
        this.classrooms = res as [];
        this.classrooms.forEach(classroom => {
          this.getAllAnnouncement(classroom.id, classroom.description);
        });
      });
    }
    
  }
  getAllAnnouncement(id?:UserService, courseName?:String) {
    console.log(id);
    this.userSucces.getAnnouncement(id).subscribe(res => {
      this.classes.push({course: courseName, announcements: res as []});
    });
  }

}
