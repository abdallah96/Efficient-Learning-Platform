import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import{ReactiveFormsModule} from '@angular/forms';
import{AngularFontAwesomeModule} from 'angular-font-awesome';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CookieService } from 'ngx-cookie-service';
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
import { MystudentComponent } from './teachers/mystudent/mystudent.component';
import { MaterialsComponent } from './materials/materials.component';
import { MaterialComponent } from './materials/material/material.component';
import { MaterialAnswerComponent } from './materials/material-answer/material-answer.component';
import { ScoreListComponent } from './materials/score-list/score-list.component';
import { NotificationComponent } from './notification/notification.component';
import { ScoComponent } from './sco/sco.component';
import { AnnouncementComponent } from './announcement/announcement.component';
import { ProfileComponent } from './profile/profile.component';
import { Profile } from 'selenium-webdriver/firefox';
import { ClassDetailsComponent } from './class-details/class-details.component';
import { CommentComponent } from './comment/comment.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { StdProfileComponent } from './std-profile/std-profile.component';
import { TakenClassroomComponent } from './taken-classroom/taken-classroom.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { PythonEditorComponent } from './python-editor/python-editor.component';





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
    MystudentComponent,
    MaterialsComponent,
    MaterialComponent,
    MaterialAnswerComponent,
    ScoreListComponent,
    NotificationComponent,
    ScoComponent,
    AnnouncementComponent,
    ProfileComponent,
    ClassDetailsComponent,
    CommentComponent,
    ProfilesComponent,
    StdProfileComponent,
    TakenClassroomComponent,
    TaskDetailsComponent,
    PythonEditorComponent,
    
    
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
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
      {path:'classroom', component:ClassroomComponent,canActivate:[AuthGuard]},
      {path:'mystudents',component:MystudentComponent,canActivate:[AuthGuard]},
      {path:'material',component:MaterialComponent,canActivate:[AuthGuard]},
      {path:'materials',component:MaterialsComponent,canActivate:[AuthGuard]},
      {path:'materialsAnswer',component:MaterialAnswerComponent,canActivate:[AuthGuard]},
      {path:'notification',component:NotificationComponent,canActivate:[AuthGuard]},
      {path:'score',component:ScoreListComponent,canActivate:[AuthGuard]},
      {path:'announcement',component:AnnouncementComponent,canActivate:[AuthGuard]},
      {path:'profile',component:ProfileComponent,canActivate:[AuthGuard]},
      {path:'classes',component:ClassDetailsComponent,canActivate:[AuthGuard]},
      {path:'stdProfile',component:StdProfileComponent,canActivate:[AuthGuard]},
      {path:'joinClass',component:TakenClassroomComponent,canActivate:[AuthGuard]},
      {path:'task',component:TaskDetailsComponent,canActivate:[AuthGuard]},
      {path:'editor',component:PythonEditorComponent,canActivate:[AuthGuard]},

    ])
  ],
  providers: [TeacherService,UserService,StudentService,CookieService, CourseService, ClassroomService, LoginComponent,],
  bootstrap: [AppComponent]
})
export class AppModule { }
