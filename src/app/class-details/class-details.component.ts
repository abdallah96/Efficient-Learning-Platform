import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../shared/user.service';
import { ClassroomService } from '../shared/classroom.service';
import { MaterialService } from '../shared/material.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';




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
  constructor( private user : UserService, private service : ClassroomService, private material :MaterialService) { }

  ngOnInit() {
    this.user.getCurrentUser().subscribe(
      res=>{
        this.userDetails = res;
      }
    );
    this.material.studentSuccess()
    .subscribe(res =>{
            this.success = res
    });
    this.service.takenClassroom().subscribe(res => {
      this.classrooms = res as [];
      this.classrooms.forEach(classroom => {
        this.getAllAnnouncement(classroom.givenClassroomId, classroom.courseName);
      });
    });
    if(this.classrooms.length == 0) {
      this.service.givenClassroom().subscribe(res => {
        this.classrooms = res as [];
        this.classrooms.forEach(classroom => {
          this.getAllAnnouncement(classroom.id, classroom.description);
        });
      });
    }
    
  }
  
  getAllAnnouncement(id?:UserService, courseName?:String) {
    this.material.getAnnouncement(id).subscribe(res => {
      this.classes.push({course: courseName, announcements: res as []});
    });
  }

  setAnnouncementId(announcementId) {
    localStorage.setItem('announcementId', JSON.stringify(announcementId));
  }
}