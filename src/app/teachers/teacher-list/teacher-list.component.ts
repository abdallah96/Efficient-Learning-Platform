import { Component, OnInit } from '@angular/core';
import { TeacherService } from 'src/app/shared/teacher.service';
import { Teacher } from 'src/app/shared/teacher.model';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit {

  constructor(private service: TeacherService) { }

  ngOnInit() {
    this.service.GetAllTeachers();
  }
updateForm(teach: Teacher){
this.service.formData = teach;
}
}
