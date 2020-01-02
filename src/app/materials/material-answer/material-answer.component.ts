import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ClassroomService } from 'src/app/shared/classroom.service';
import { UserService } from 'src/app/shared/user.service';
import { Material } from 'src/app/shared/material.model';
import { NgForm } from '@angular/forms';
import { MaterialService } from 'src/app/shared/material.service';
import { MaterialAnswer } from 'src/app/shared/material-answer.model';
import { StudentService } from 'src/app/shared/student.service';

@Component({
  selector: 'app-material-answer',
  templateUrl: './material-answer.component.html',
  styleUrls: ['./material-answer.component.css']
})
export class MaterialAnswerComponent implements OnInit {
  userDetails;
  material =[];
  materialForms=[];
  userSuccess;
  notifications;
  freshMaterial


  constructor(private service: MaterialService, private toastr: ToastrService,private classroomService : ClassroomService,private user: UserService, private student: StudentService) { }

  ngOnInit() {
    this.resetForm();
    this.user.getCurrentUser().subscribe(
      res=>{
        this.userDetails = res;
      }
    );
    // this.getMaterial();
    this.service.studentSuccess()
    .subscribe(res =>{
            this.userSuccess = res
    });
    this.user.getNotification()
    .subscribe(res =>{
            this.notifications = res
    });
    this.user.freshMaterials()
    .subscribe(res =>{
            this.freshMaterial = res
    });
  
  }
  resetForm(form ?: NgForm){
    if(form != null)
    form.resetForm();
    this.service.fd ={
      materialId: 0,
      answer:'',
      
    }
  }

  onSubmit(form: NgForm){
    // if(this.service.formData.id == 0)
    console.log(form);
    this.insertRecord(form);
    // else
    // this.updateRecord(form);
  }
  insertRecord(form: NgForm){
    this.service.postMaterial(form.value).subscribe(
      res=>{
        this.resetForm(form);
        this.toastr.success('Material answer was created Successfully')
      },
      err =>{
      this.toastr.error(err.error+'Failure')  
    })
  }
  // getMaterial(id ?: Number){
  //   this.service.getMaterial(id)
  //   .subscribe(res => this.material = res as []);
    
  // }

}
