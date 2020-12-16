import {Course} from './course.model';
import {TopicComment} from './topic-comment.model';

export interface Topic{
  id?: number;
  name: string;
  mainBody: string;
  course: Course;
  courseId: number;
  comments?: TopicComment[];
}
