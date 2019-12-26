import { Component, OnInit } from '@angular/core';
import { ClassroomService } from 'src/app/shared/classroom.service';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-mystudent',
  templateUrl: './mystudent.component.html',
  styleUrls: ['./mystudent.component.css']
})
export class MystudentComponent implements OnInit {
userDetails;
  constructor(private service: ClassroomService, private user: UserService) { }

  ngOnInit() {
    this.user.getCurrentUser().subscribe(
      res=>{
        this.userDetails = res;
      }
    );
    console.log();
    this.getAllStudents();
  }
  getAllStudents(id?:Number){
    this.service.getStudents(id)

  }
}
