import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'e-learning';
  isLoggedIn$;

  constructor(private router:Router) {}
  
  // ngOnInit() {
  //   setTimeout(() => {
  //     console.log(this.router.url);
  //     this.isLoggedIn$ = this.router.url == '/login' ? false : true;
  //   }, 10);
  // }

}
