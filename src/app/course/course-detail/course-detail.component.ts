import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Course} from '../../Shared/Models/course.model';
import {ActivatedRoute, Router} from '@angular/router';
import {CourseService} from '../../Shared/Services/course.service';
import {catchError, switchMap, take} from 'rxjs/operators';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {
  id: number;
  course$: Observable<Course>;
  err: any;
  courses: Course[];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private courseService: CourseService) {
  }

  ngOnInit(): void {
    this.courseService.getCourses()
      .subscribe(
        courses => {
          this.courses = courses;
        });
    this.course$ = this.route.paramMap
      .pipe(
        take(1),
        switchMap(params => {
          this.id = +params.get('id');
          return this.course$ = this.courseService.findById(this.id);
        }),
        catchError(this.err)
      );
  }
  // tslint:disable-next-line:typedef
  delete(){
    this.courseService.delete(this.id)
      .pipe(
        take(1),
        catchError(this.err)
      )
      .subscribe();
  }
}
