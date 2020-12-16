import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NavbarWelcomeComponent } from './welcomes/shared/navbar-welcome/navbar-welcome.component';
import { NavbarUserComponent } from './Shared/Navbar/navbar-user/navbar-user.component';
import { NavbarTeacherComponent } from './Shared/Navbar/navbar-teacher/navbar-teacher.component';
import { AdminListComponent } from './admin/admin-list/admin-list.component';
import { CourseListComponent } from './course/course-list/course-list.component';
import { TeacherListComponent } from './TypeUser/teacher/teacher-list/teacher-list.component';
import { TopicListComponent } from './topic/topic-list/topic-list.component';
import { UserListComponent } from './TypeUser/user/user-list/user-list.component';
import {WelcomeComponent} from './welcomes/welcome/welcome.component';
import {NavbarAdminComponent} from './admin/shared/navbar-admin/navbar-admin.component';

import { DashboardComponent } from './Shared/dashboard/dashboard.component';

import { TopicPageComponent } from './topic/topic-page/topic-page.component';

import { CourseCreateComponent } from './course/course-create/course-create.component';
import { CourseUpdateComponent } from './course/course-update/course-update.component';
import { CourseDetailComponent } from './course/course-detail/course-detail.component';
import { TopicUpdateComponent } from './topic/topic-update/topic-update.component';
import { TopicDetailComponent } from './topic/topic-detail/topic-detail.component';
import { TopicCreateComponent } from './topic/topic-create/topic-create.component';

import { DashboardTeacherComponent } from './TypeUser/dashboard-teacher/dashboard-teacher.component';
import {AuthenticationService} from './Shared/Services/authentication.service';
import {AdminService} from './admin/shared/admin.service';
import {AuthGuard} from './Shared/guards/auth.guard';



@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    NavbarWelcomeComponent,
    NavbarUserComponent,
    NavbarTeacherComponent,
    NavbarAdminComponent,
    AdminListComponent,
    CourseListComponent,
    TeacherListComponent,
    TopicListComponent,
    UserListComponent,
    DashboardComponent,
    TopicPageComponent,

    CourseCreateComponent,
    CourseUpdateComponent,
    CourseDetailComponent,
    TopicUpdateComponent,
    TopicDetailComponent,
    TopicCreateComponent,

    DashboardTeacherComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [AuthGuard,
    AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
