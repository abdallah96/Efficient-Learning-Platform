import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
  isLoggedIn$;
  constructor(private router:Router, private service: UserService, private cookieService: CookieService) { }
  
  ngOnInit() {
    setTimeout(() => {
      this.isLoggedIn$ = this.router.url == '/login' || this.router.url == '/register' ? false : true;
      this.router.events.subscribe((val) => {
        console.log(val);
        this.isLoggedIn$ = this.router.url == '/login'  || this.router.url == '/register' ? false : true;
      });
    }, 10);
  }

  onLogout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
    this.isLoggedIn$ = false;
  }
}
