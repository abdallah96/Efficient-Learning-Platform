import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/shared/student.service';
import { ToastrService } from 'ngx-toastr';
import { Student } from 'src/app/shared/student.model';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  constructor(private service: StudentService ,private toastr: ToastrService) { }

  ngOnInit() {
    this.service.GetAllStudents();

  }
  updateForm(s: Student){
    this.service.formData = Object.assign({}, s);
    }
  onDelete(id){
    this.service.DeleteStudent(id).subscribe(res =>{
      this.toastr.warning('the teacher has been deleted')
    },
      err=>{
        console.log(err)
      })
  }

}
