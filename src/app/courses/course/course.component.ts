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
      id: null,
      name :'',
      programmingType:'',    
    }
  }
  onSubmit(form: NgForm){
    this.service.postClass(form.value).subscribe(
      res=>{
        this.resetForm(form);
        this.toastr.success('Course was created Successfully')
      },
      err =>{
      this.toastr.error(err.error+'Failure')  
    })
  }
}
