import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { MaterialService } from '../shared/material.service';

@Component({
  selector: 'app-std-profile',
  templateUrl: './std-profile.component.html',
  styleUrls: ['./std-profile.component.css']
})
export class StdProfileComponent implements OnInit {
  userDetails;
  currentUserDetails = {};
  classroomForms  = [];
  Course = [];
  stdSuccess;
  joinedCount;
  doneMaterialCount;

  constructor(private user: UserService, private count: MaterialService) { }

  ngOnInit() {
    this.user.getCurrentUser().subscribe(
      res=>{
        this.userDetails = res;
      }
    );
    this.count.studentSuccess()
    .subscribe(res =>{
            this.stdSuccess = res
    });
    this.count.joinedCount()
    .subscribe(res =>{
            this.joinedCount = res
    });
    this.count.materialCount()
    .subscribe(res =>{
            this.doneMaterialCount = res
    });
  }
  

}
