import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {CommentService} from '../../Shared/Services/comment.service';

@Component({
  selector: 'app-dashboard-teacher',
  templateUrl: './dashboard-teacher.component.html',
  styleUrls: ['./dashboard-teacher.component.css']
})
export class DashboardTeacherComponent implements OnInit {
  userType: string;
  email: string;
  comment$: Observable<Comment[]>;
  id: 1;
  constructor(private route: ActivatedRoute, private commentService: CommentService) { }

  ngOnInit(): void {
    this.comment$ = this.commentService.getComments();
    this.userType = 'user';
    this.email = 'email@email.com';
  }

}
