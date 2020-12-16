import {Topic} from './topic.model';

export interface Course{
  id?: number;
  name: string;
  topics?: Topic[];
}
