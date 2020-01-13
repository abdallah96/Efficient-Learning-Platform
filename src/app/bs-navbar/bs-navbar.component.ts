import { Component,ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';
import { CookieService } from 'ngx-cookie-service';
import { ClassroomService } from '../shared/classroom.service';
import { Location } from '@angular/common';
import {NgbTypeahead} from '@ng-bootstrap/ng-bootstrap';
import {Observable, Subject, merge} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, map} from 'rxjs/operators';


@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
  // model: any;
  isLoggedIn$;
  userDetails;
  classrooms = [];
  searchTerms;

  // @ViewChild('instance', {static: true}) instance: NgbTypeahead;
  // focus$ = new Subject<string>();
  // click$ = new Subject<string>();
  
  constructor(private router:Router, private service: UserService, private classroomService: ClassroomService, private location: Location) { }
  
  ngOnInit() {
    setTimeout(() => {
      this.isLoggedIn$ = this.router.url == '/login' || this.router.url == '/register' ? false : true;
      this.userDetails = JSON.parse(localStorage.getItem('userDetails'));
      this.router.events.subscribe((val) => {
        this.isLoggedIn$ = this.router.url == '/login' || this.router.url == '/register' ? false : true;
        this.userDetails = JSON.parse(localStorage.getItem('userDetails'));
      });
    }, 10);

  }

  onLogout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
    this.isLoggedIn$ = false;
  }
  
  getByClassroomSearch(searchValue){
    searchValue = searchValue ? searchValue : "etrxytjyljgj";
    this.classroomService.findClassroom(searchValue).subscribe(res => {
      this.classrooms = res as [];
      
    });
  }
  // search = (text$: Observable<string>) => {
  //   const debouncedText$ = text$.pipe(debounceTime(200), distinctUntilChanged());
  //   const clicksWithClosedPopup$ = this.click$.pipe(filter(() => !this.instance.isPopupOpen()));
  //   const inputFocus$ = this.focus$;

  //   return this.classroomService.findClassroom(this.model).subscribe(res => {
  //         console.log(this.model);
  //          this.classrooms = res as [];
  //   });
  
  
  
}
