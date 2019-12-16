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
      (res:any) =>{
        if(res.Success){
          this.userService.formModel.reset();
          this.toastr.success('You have succesfully registered','Registration Successful ')
        }else{
          res.errors.forEach(element => {
            switch (element.code) {
              case 'DuplicateUserName':
              this.toastr.error('Username is already taken','Registration Failed');
                break;    
              default:
                  this.toastr.error(element.description,'Registration Failed');
                  break;
            }
          });
        }
      },
      err =>{
        console.log(err)
      }
    )
  }
}
