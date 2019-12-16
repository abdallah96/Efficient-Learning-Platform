import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/shared/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  constructor(private service: StudentService) { }

  ngOnInit() {
    this.service.GetAllStudents();

  }

}
