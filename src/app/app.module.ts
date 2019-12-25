import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import{ReactiveFormsModule} from '@angular/forms'
import{AngularFontAwesomeModule} from 'angular-font-awesome'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr'
import { UserService } from './shared/user.service';
import { AuthGuard } from './auth/auth.guard';
import { TeachersComponent } from './teachers/teachers.component';
import { TeacherComponent } from './teachers/teacher/teacher.component';
import { TeacherListComponent } from './teachers/teacher-list/teacher-list.component';
import { TeacherService } from './shared/teacher.service';
import { StudentsComponent } from './students/students.component';
import { StudentComponent } from './students/student/student.component';
import { StudentListComponent } from './students/student-list/student-list.component';
import { StudentService } from './shared/student.service';
import { CoursesComponent } from './courses/courses.component';
import { CourseComponent } from './courses/course/course.component';
import { CourseListComponent } from './courses/course-list/course-list.component';
import { CourseService } from './shared/course.service';
import { ClassroomComponent } from './classroom/classroom.component';
import { ClassroomService } from './shared/classroom.service';





@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    AdminComponent,
    TeachersComponent,
    TeacherComponent,
    TeacherListComponent,
    StudentsComponent,
    StudentComponent,
    StudentListComponent,
    CoursesComponent,
    CourseComponent,
    CourseListComponent,
    ClassroomComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path: 'login', component: LoginComponent},
      {path:'home', component: HomeComponent,canActivate:[AuthGuard]},
      {path: 'register', component: RegisterComponent},
      {path: 'teachers', component: TeachersComponent,canActivate:[AuthGuard]},
      {path: 'students',component: StudentsComponent,canActivate:[AuthGuard]},
      {path:'admin', component: AdminComponent,canActivate:[AuthGuard]},
      {path:'course', component: CoursesComponent,canActivate:[AuthGuard]},
      {path:'classroom', component:ClassroomComponent,canActivate:[AuthGuard]}

    ])
  ],
  providers: [TeacherService,UserService,StudentService, CourseService, ClassroomService, LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
