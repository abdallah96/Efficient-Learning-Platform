import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { ClassroomService } from '../shared/classroom.service';
import { Material } from '../shared/material.model';
import { MaterialService } from '../shared/material.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html', 
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {
  scores = [];
  classrooms = [];
  materials = [];
  answeredMaterials = [];
  classValue = "";
  materialValue = "";
  pointValue = "";

  constructor(private materialService: MaterialService, private classroomService: ClassroomService, private toastr: ToastrService) { }

  ngOnInit() {
    this.classroomService.givenClassroom().subscribe(res => {
      this.classrooms = res as [];
    });
  }

  // api/Material/GetMaterials/{givenClassroomId}
  getClassroomMaterials(classId) {
    this.materialValue = "";
    this.materialService.getClassroomMaterials(classId).subscribe(res => {
      this.materials = res as [];
    });
  }

  //api/MaterialAnswer/GetMaterialAnswers/{materialId}
  getMaterialAnswers(materialId) {
    this.materialService.getMaterialAnswers(materialId).subscribe(res => {
      this.answeredMaterials = res as [];
    });
  }

  givePoint(studentPoint, studentId) {
    var data = {userId: studentId, materialId: this.materialValue, score: studentPoint};
    this.materialService.givePoint(data).subscribe(res => {
      this.toastr.success("Point given succesfully");
    });
  }
}