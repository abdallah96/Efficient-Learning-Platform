import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/shared/student.service';
import { ToastrService } from 'ngx-toastr';

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
  onDelete(id){
    this.service.DeleteStudent(id).subscribe(res =>{
      this.toastr.warning('the teacher has been deleted')
    },
      err=>{
        console.log(err)
      })
  }

}
