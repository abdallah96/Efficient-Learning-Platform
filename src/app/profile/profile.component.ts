import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { MaterialService } from '../shared/material.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userDetails;
  currentUserDetails = {};
  classroomForms  = [];
  Course = [];
  success;
  stdCount;
  materialCount;
  constructor(private user: UserService, private count: MaterialService) { }

  ngOnInit() {
    this.user.getCurrentUser().subscribe(
      res=>{
        this.userDetails = res;
      }
    );
    this.count.UserSuccess()
    .subscribe(res =>{
            this.success = res
    });
    this.count.studentCount()
    .subscribe(res =>{
            this.stdCount = res
    });
    this.count.materialCount()
    .subscribe(res =>{
            this.materialCount = res
    });
  }

}
