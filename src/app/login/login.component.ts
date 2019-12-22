import { Component, OnInit, Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

@Injectable({
  providedIn: 'root'
})

export class LoginComponent implements OnInit {
  userDetails: any;
  
  formModel = {
    email:'',
    password:''
  }
  
  constructor(private service: UserService, private router:Router, private toastr: ToastrService) {
    this.service.getCurrentUser(this.userDetails).subscribe(
      (res:any) => {
        this.userDetails = res;
      }
    );
  }

  ngOnInit() {
    if(localStorage.getItem('token')!=null)
    this.router.navigateByUrl('/home');
  }

  onSubmit(form:NgForm){
    this.service.login(form.value).subscribe(
      (res:any)=>{
        localStorage.setItem('token',res.token);//save jwt inside browser local storage
        this.router.navigateByUrl('/home');
        this.service.getCurrentUser(form.value.id).subscribe(
          (res:any) => {
            this.userDetails = res;
            if(res.role == 'Teacher') {
              this.router.navigateByUrl('/classroom');
            }
            else if(res.role == 'Student') {
              this.router.navigateByUrl('/home');
            }
          },
          err => {
            this.router.navigateByUrl('/home');
          }
        )
      },
      err => {
        this.toastr.error(err.error, 'Authentication failed');
      }
    );
  }
}
