import { DoneLesson } from './doneLesson.model';
import { LessonToDo } from './lessonToDo.model';
export interface User {
  name?: string;
  surename?: string;
  login?: string;
  password?: string;
  schoolClass?: string;
  doneLessons?: DoneLesson[];
  lessonsToDo?: LessonToDo[];
}
