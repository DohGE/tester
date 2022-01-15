import { Language } from './language.model';
import { Exercise } from './exercise.model';

export interface Lesson {
  name: string;
  description: string;
  date?: string;
  exercises?: Exercise[];
  language: Language;
  id?: number;
}
