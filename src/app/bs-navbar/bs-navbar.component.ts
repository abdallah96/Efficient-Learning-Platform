import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
  isLoggedIn$;
  constructor(private router:Router, private service: UserService) { }
  
  ngOnInit() {
    setTimeout(() => {
      console.log(this.router.url);
      this.isLoggedIn$ = this.router.url == '/login' ? false : true;
    }, 10);
  }

  onLogout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
    this.isLoggedIn$ = false;
  }
}
