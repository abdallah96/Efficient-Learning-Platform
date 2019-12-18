import { Component, OnInit } from '@angular/core';
import { TeacherService } from 'src/app/shared/teacher.service';
import { Teacher } from 'src/app/shared/teacher.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit {

  constructor(private service: TeacherService, private toastr : ToastrService) { }

    ngOnInit() {
      this.service.GetAllTeachers();
    }

    updateForm(teach: Teacher){
    this.service.formData = Object.assign({}, teach);
    }
    
    deleteTeacher(id){
      this.service.deleteTeacher(id).subscribe(res =>{
        this.toastr.warning('student has been deleted')
      },
        err=>{
          console.log(err)
        })
    }
}
