import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StudentService } from 'src/app/shared/student.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styles: []
})
export class StudentComponent implements OnInit {

  constructor(private service: StudentService, private toatr: ToastrService ) { }

  ngOnInit() {
    this.resetForm()
  }

  resetForm(form ?:NgForm){
    if(form != null)
    form.resetForm();
    this.service.formData ={
      id: 0,
      name :'',
      surname:'',
      username :'',
      email:'',
      password :'',
      confirmPassword :'',
    }
  }
  onSubmit(form: NgForm){
    if(this.service.formData.id == 0)
    this.insertRecord(form);
    else
    this.updateRecord(form);
    }
    
    insertRecord(form: NgForm){
      this.service.postStudent(form.value).subscribe(
        res=>{
          this.resetForm(form);
          this.toatr.success('Student Created Successfully')
        },
        err =>{
        this.toatr.error(err.error+'Failure')  
      })
    }
    
    updateRecord(form:NgForm){
      this.service.UpdateStudent().subscribe(
        res=>{
        this.resetForm(form);
        this.toatr.success('Student was updated sucessfully'),
        err =>{
          console.log(err);
        }
        
      });
    }
 
}
