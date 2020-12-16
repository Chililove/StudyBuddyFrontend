import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Topic} from '../../Shared/Models/topic.model';
import {TopicService} from '../../Shared/Services/topic.service';
import {FormControl, FormGroup} from '@angular/forms';
import {CommentService} from '../../Shared/Services/comment.service';
import {User} from '../../Shared/Models/user.model';


@Component({
  selector: 'app-topic-page',
  templateUrl: './topic-page.component.html',
  styleUrls: ['./topic-page.component.css']
})
export class TopicPageComponent implements OnInit {

  user: User;
  topic: Topic;

  commentForm = new FormGroup({
    mainBody: new FormControl('')
    });

  constructor(private route: ActivatedRoute,
              private topicService: TopicService,
              private commentService: CommentService) { }
  ngOnInit(): void {
    this.topicService.findById(1)
     .subscribe(topic => {this.topic = topic;
     });
  }
  saveComment(): void {
    const comment = {
      mainBody: this.commentForm.value,
      topic: this.topic,
      user: this.user,
      datePosted: new Date((new Date()).getTime())
    };
    this.commentService.create(comment)
      .subscribe();
    this.commentForm.reset();
  }
}
