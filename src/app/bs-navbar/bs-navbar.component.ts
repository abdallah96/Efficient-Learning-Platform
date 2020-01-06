import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';
import { CookieService } from 'ngx-cookie-service';
import { ClassroomService } from '../shared/classroom.service';


@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
  isLoggedIn$;
  userDetails;
  classrooms = [];

  constructor(private router:Router, private service: UserService, private classroomService: ClassroomService) { }
  
  ngOnInit() {
    setTimeout(() => {
      this.isLoggedIn$ = this.router.url == '/login' || this.router.url == '/register' ? false : true;
      this.router.events.subscribe((val) => {
        console.log(val);
        this.isLoggedIn$ = this.router.url == '/login'  || this.router.url == '/register' ? false : true;
      });
      this.userDetails = JSON.parse(localStorage.getItem('userDetails'));
      console.log(this.userDetails);
    }, 10);
  }

  onLogout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
    this.isLoggedIn$ = false;
  }
  getByClassroomSearch(){
    this.classroomService.findClassroom().subscribe(res => {
      console.log(res);
      this.classrooms = res as []
    });
  }
  
}
