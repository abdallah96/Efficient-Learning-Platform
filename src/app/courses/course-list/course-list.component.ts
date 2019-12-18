import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/shared/course.model';
import { CourseService } from 'src/app/shared/course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  constructor(private service : CourseService) { }

  ngOnInit() {
    this.service.getAllCourses();
  }

}
