import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { ClassroomService } from '../shared/classroom.service';
import { MaterialService } from '../shared/material.service';

// @Component({
//   selector: 'ngbd-modal-content',
//   template: `
//     <div class="modal-header">
//       <h4 class="modal-title">Description</h4>
//       <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
//         <span aria-hidden="true">&times;</span>
//       </button>
//     </div>
//     <div class="modal-body">
//     <input type="text" name="description" #surname="ngModel" [(ngModel)]="service.comment.description" class="form-control">      
//     </div>
//     <div class="modal-footer">
//     <button type="submit" class="btn btn-primary btn-lg btn-block" >SUBMIT</button>
//       <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
//     </div>
//   `
// })
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
    this.userSucces.studentSuccess()
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
