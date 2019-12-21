import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/shared/course.model';
import { CourseService } from 'src/app/shared/course.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  constructor(private service : CourseService, private toastr : ToastrService) { }

  ngOnInit() {
    this.service.getAllCourses();
  }
  updateForm(c: Course){
    this.service.formData = Object.assign({}, c);
    }
    onDelete(id){
      this.service.DeleteCourse(id).subscribe(res =>{
        this.toastr.warning('The course has been deleted')
      },
        err=>{
          console.log(err)
        })
    }
    
    

}
