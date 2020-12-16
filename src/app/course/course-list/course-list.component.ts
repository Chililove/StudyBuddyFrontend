import { Component, OnInit } from '@angular/core';
import {Course} from '../../Shared/Models/course.model';
import {CourseService} from '../../Shared/Services/course.service';
import {TopicService} from '../../Shared/Services/topic.service';
import {Topic} from '../../Shared/Models/topic.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  courses: Course[];
  topics: Observable<Topic[]>;
  constructor(private courseService: CourseService, private topicService: TopicService) { }

  ngOnInit(): void {
    this.courseService.getCourses()
      .subscribe(
        courses => {
          this.courses = courses;
        });
  }
}
