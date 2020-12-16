import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {CommentService} from '../Services/comment.service';
import {UserService} from '../Services/user.service';
import {AuthenticationService} from '../Services/authentication.service';
import {CourseService} from '../Services/course.service';
import {Course} from '../Models/course.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userType: string;
  email: string;
  Course: Course[] = [];

  constructor(private courseService: CourseService,
              private authService: AuthenticationService) {
    this.userType = authService.getUsername();
  }

  ngOnInit(): void {
    // this.userType = 'user';
    this.email = 'email@email.com';
    this.courseService.getCourses()
      .subscribe(
        courses => {
          this.Course = courses;
        });
  }
}

