import { Component, OnInit } from '@angular/core';
import { ClassroomService } from '../shared/classroom.service';
import { MaterialService } from '../shared/material.service';
import { UserService } from '../shared/user.service';
import { NgForm } from '@angular/forms';
import { Announcement } from '../shared/announcement.model';
import { CommentService } from '../shared/comment.service';
import { StudentService } from '../shared/student.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  comments = [];
  selectedAnnouncementId;
  displayComments = false;
  users;

  constructor(private comment: CommentService, private studentService: StudentService) { }

  ngOnInit() {
    let thisComponent = this;
    this.resetForm();
    this.studentService.GetAllStudents();
    
    $('#exampleModal').on('show.bs.modal', function() {
      thisComponent.selectedAnnouncementId = localStorage.getItem('announcementId');
      thisComponent.getComments(thisComponent.selectedAnnouncementId);
    });
  }

  // trackComment(index: number, comment: any) {
  //   return comment.id;
  // }  

  resetForm(form ?: NgForm){
    if(form != null)
    form.resetForm();
    this.comment.comment = {
      announcementId:0,
      description: '',
    }
  }

  onSubmit(form: NgForm){
    this.insertRecord(form);
  }
  
  insertRecord(form: NgForm){
    form.setValue({description: form.value.description, announcementId: this.selectedAnnouncementId});
    this.comment.createComment(form.value).subscribe(
      res=>{
        this.resetForm(form);
        // $('#exampleModal').modal('hide');
      },
      err =>{
        console.log();
    });
  }

  getComments(id?:Number) {
    this.comment.getComments(id).subscribe(res => {
      this.comments = res as [];
      this.comments.forEach(comment => {
        comment.user = this.studentService.list.find(student => student.id == comment.userId);
      });
    });
  }
}