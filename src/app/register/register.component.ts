import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../shared/user.service';
import { subscribeOn } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService : UserService, private toastr: ToastrService) { }

  ngOnInit() {
    this.userService.formModel.reset();
  }
 
  onSubmit(){
    this.userService.registerUser().subscribe(
      (res:any) => {
      //   console.log(res);
      //   if(res.Success){
        this.userService.formModel.reset();
        this.toastr.success('You have succesfully been registered','Registration Successful ')
        // }else{
        //   err =>{
        //     this.toastr.error(err.error, 'Registration failed');
        //   }
        // }
      },
      err => {
        this.toastr.error(err.error, 'Registration failed');
      }
    )
  }
}
