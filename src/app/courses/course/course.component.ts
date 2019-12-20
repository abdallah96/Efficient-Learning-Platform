import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/shared/course.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor(private service:CourseService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }
  resetForm(form ?: NgForm){
    if(form != null)
    form.resetForm();
    this.service.formData ={
      id: 0,
      name :'',
      programmingType:'',    
    }
  }
  onSubmit(form: NgForm){
    if(this.service.formData.id == 0)
    this.insertRecord(form);
    else
    this.updateRecord(form);
  }
 
  insertRecord(form: NgForm){
    this.service.postClass().subscribe(
      res=>{
        this.resetForm(form);
        this.toastr.success('Course was created Successfully')
      },
      err =>{
      this.toastr.error(err.error+'Failure')  
    })
  }
  updateRecord(form:NgForm){

    this.service.UpdateCourse().subscribe(
      res=>{
      this.resetForm(form);
      this.toastr.success('Course was updated sucessfully'),
      err =>{
        console.log(err);
      }
      
    });
  }
}
