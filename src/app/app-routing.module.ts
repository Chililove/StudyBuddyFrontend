import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';

import {LoginComponent} from './login/login.component';

import {AdminListComponent} from './admin/admin-list/admin-list.component';
import {WelcomeComponent} from './welcomes/welcome/welcome.component';
import {TeacherListComponent} from './TypeUser/teacher/teacher-list/teacher-list.component';
import {TopicListComponent} from './topic/topic-list/topic-list.component';
import {UserListComponent} from './TypeUser/user/user-list/user-list.component';
import {CourseListComponent} from './course/course-list/course-list.component';
import {TopicPageComponent} from './topic/topic-page/topic-page.component';
import {CourseDetailComponent} from './course/course-detail/course-detail.component';
import {CourseUpdateComponent} from './course/course-update/course-update.component';
import {CourseCreateComponent} from './course/course-create/course-create.component';
import {AuthGuard} from './Shared/guards/auth.guard';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './Shared/dashboard/dashboard.component';
import {DashboardTeacherComponent} from './TypeUser/dashboard-teacher/dashboard-teacher.component';
import {TopicCreateComponent} from './topic/topic-create/topic-create.component';
import {TopicUpdateComponent} from './topic/topic-update/topic-update.component';
import {TopicDetailComponent} from './topic/topic-detail/topic-detail.component';
import {AdminGuard} from './Shared/guards/admin.guard';



let routes: Routes;
routes = [
  {path: 'dashboard-teacher', component: DashboardTeacherComponent, canActivate: [AuthGuard, AdminGuard]}, //
  {path: 'dashboard', component: DashboardComponent}, // , canActivate: [AuthGuard]
  {path: 'course-list', component: CourseListComponent}, // canActivate: [AuthGuard]
  {path: 'course-create', component: CourseCreateComponent}, // canActivate: [AuthGuard]
  {path: 'course-update', component: CourseUpdateComponent}, // canActivate: [AuthGuard]
  {path: 'course/:id', component: CourseDetailComponent}, // canActivate: [AuthGuard]
  {path: 'topic-page', component: TopicPageComponent}, // canActivate: [AuthGuard]
  {path: 'topic-detail', component: TopicDetailComponent}, // canActivate: [AuthGuard]
  {path: 'topic-update', component: TopicUpdateComponent}, // canActivate: [AuthGuard]
  {path: 'topic-create', component: TopicCreateComponent}, // canActivate: [AuthGuard]
  {path: 'topic-list', component: TopicListComponent},   // canActivate: [AuthGuard]
  {path: 'teacher-list', component: TeacherListComponent}, // delete ?
  {path: 'user', component: UserListComponent},  // delete ?
  {path: 'admin', component: AdminListComponent}, // canActivate: [AuthGuard]
  {path: 'welcome', component: WelcomeComponent},
  {path: 'login', component: LoginComponent },
  {path: '', component: WelcomeComponent},
// otherwise redirect to welcome
  { path: '**', redirectTo: 'welcome' }
];

@NgModule({
  imports: [CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
