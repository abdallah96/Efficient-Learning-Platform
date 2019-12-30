import { Component, OnInit } from '@angular/core';
import { StudentService } from '../shared/student.service';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  notifications;
  freshMaterial;

  constructor(private service: UserService) { }

  ngOnInit() {
    console.log();
    this.service.getNotification()
    .subscribe(res =>{
            this.notifications = res
    });
    this.service.freshMaterials()
    .subscribe(res =>{
            this.freshMaterial = res
    });
  }

}
