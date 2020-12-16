import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Course} from '../../Shared/Models/course.model';
import {CourseService} from '../../Shared/Services/course.service';
import {map, catchError} from 'rxjs/operators';

@Component({
  selector: 'app-course-create',
  templateUrl: './course-create.component.html',
  styleUrls: ['./course-create.component.css']
})
export class CourseCreateComponent implements OnInit {
  name = new FormControl('');
  id = new FormControl('');
  creating = false;
  errString = '';

  courses: Course[];
  constructor(private courseService: CourseService) {
  }

  ngOnInit(): void {
    this.courseService.getCourses()
      .subscribe(
        courses => {
          this.courses = courses;
        });
  }

  save = () => {
    this.creating = true;
    const idValue = this.id.value;
    const nameValue = this.name.value;
    const course: Course = {
      id: idValue,
      name: nameValue,
      topics: []
    };
    this.courseService.create(course)
      .pipe(
        catchError(err => {
          this.creating = false;
          this.errString = err.error;
          return err;
        })
      )
      .subscribe(courses => {
        this.name.reset();
        this.creating = false;
        this.errString = '';
      });

  }
}
