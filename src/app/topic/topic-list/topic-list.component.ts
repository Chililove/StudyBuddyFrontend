import { Component, OnInit } from '@angular/core';
import {Course} from '../../Shared/Models/course.model';
import {CourseService} from '../../Shared/Services/course.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.css']
})
export class TopicListComponent implements OnInit {
 course: Course;
 err: string;

  constructor(private route: ActivatedRoute, private courseService: CourseService) { }

  ngOnInit(): void {
    this.courseService.findById(1).subscribe(course => {this.course = course;
    });
  }
}
