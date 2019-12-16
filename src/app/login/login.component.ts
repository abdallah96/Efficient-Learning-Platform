import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
formModel = {
  email:'',
  password:''
  
}
  constructor(private service: UserService, private router:Router, private toastr: ToastrService) { }

  ngOnInit() {
    if(localStorage.getItem('token')!=null)
    this.router.navigateByUrl('/home');
  }

  onSubmit(form:NgForm){
    this.service.login(form.value).subscribe(
      (res:any)=>{
        localStorage.setItem('token',res.token);//save jwt inside browser local storage
        this.router.navigateByUrl('/home');
        // this.service.getCurrentUser(form.value.email).subscribe(
        //   (res:any) => {
        //     if(res.role === 'Teacher') {
        //       this.router.navigateByUrl('/teachers');
        //     }
        //     else if(res.role === 'Student') {
        //       this.router.navigateByUrl('/students');
        //     }
        //   },
        //   err => {
        //     this.router.navigateByUrl('/home');
        //   }
        // )
      },
      err => {
        this.toastr.error(err.error, 'Authentication failed');
      }
    );
  }
}
