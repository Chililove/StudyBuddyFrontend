import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Observable, of} from 'rxjs';
import {Course} from '../../Shared/Models/course.model';
import {Topic} from '../../Shared/Models/topic.model';
import {ActivatedRoute, Router} from '@angular/router';
import {CourseService} from '../../Shared/Services/course.service';
import {TopicService} from '../../Shared/Services/topic.service';
import {CommentService} from '../../Shared/Services/comment.service';
import {catchError, switchMap, take, tap} from 'rxjs/operators';

@Component({
  selector: 'app-course-update',
  templateUrl: './course-update.component.html',
  styleUrls: ['./course-update.component.css']
})
export class CourseUpdateComponent implements OnInit {
  // cUpdateForm: FormGroup;
  // updateObservable$: Observable<Course[]>;
 //  updating: boolean;
  // errString: string;
 //  err: any;
 //  topics: Topic[];

  currentCourse = null;
  message = '';
  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private courseService: CourseService,
              private topicService: TopicService) { }

  ngOnInit(): void {
    this.message = '';
    this.getCourse(this.route.snapshot.paramMap.get('id'));
  }

  getCourse(id): void {
    this.courseService.getCourses()
      .subscribe(
        course => {
          this.currentCourse = course;
          console.log(course);
        },
        error => {
          console.log(error);
        });
  }

  setAvailableStatus(status): void {
    const id = {
      name: this.currentCourse.name,
      description: this.currentCourse.description,
      available: status
    };

    this.courseService.updateCourse(this.currentCourse.id, this.currentCourse)
      .subscribe(
        response => {
          this.currentCourse.available = status;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  updateCourses(): void {
    this.courseService.updateCourse(this.currentCourse.id, this.currentCourse)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The course was updated!';
        },
        error => {
          console.log(error);
        });
  }

  deleteCourse(): void {
    this.courseService.delete(this.currentCourse.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/course']);
        },
        error => {
          console.log(error);
        });
  }
}
