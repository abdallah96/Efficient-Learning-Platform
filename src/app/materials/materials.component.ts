import { Component, OnInit } from '@angular/core';
import { MaterialService } from '../shared/material.service';
import { ToastrService } from 'ngx-toastr';
import { ClassroomService } from '../shared/classroom.service';
import { UserService } from '../shared/user.service';
import { NgForm } from '@angular/forms';
import { Classroom } from '../shared/classroom.model';
import { Material } from '../shared/material.model';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.css']
})
export class MaterialsComponent implements OnInit {
  classes = [];
  classrooms = [];
  success;
  userDetails;

  constructor(private service: MaterialService, private toastr: ToastrService,private classroomService : ClassroomService,private user: UserService) { }

  ngOnInit() {
    this.user.getCurrentUser().subscribe(
      res=>{
        this.userDetails = res;
      }
    );
    this.service.UserSuccess()
    .subscribe(res =>{
            this.success = res
    });
      this.classroomService.givenClassroom().subscribe(res => {
        console.log(res);
        this.classrooms = res as [];
        // this.classrooms.forEach(classroom => {
        //   this.getMaterial(classroom.id, classroom.description);
        // });
      });
    
    // updateRecord(form:NgForm){

    //   this.service.UpdateCourse().subscribe(
    //     res=>{
    //     this.resetForm(form);
    //     this.toastr.success('Course was updated sucessfully'),
    //     err =>{
    //       console.log(err);
    //     }
        
    //   });
    // }
    
  }
  
    // getMaterial() {
    //   console.log(id);
    //   this.service.givePoint().subscribe(res => {
    //     this.toastr.success('Course was updated sucessfully'),
    //   });
    // }
  

}
