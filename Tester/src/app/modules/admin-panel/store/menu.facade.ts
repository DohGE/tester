import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import {
  getExercises,
  getTemporaryExercises,
  getActiveLesson,
  getActiveExercise,
} from './menu.index';
import { Lesson } from './../../../shared/models/lesson.model';
import { Exercise } from '../../../shared/models/exercise.model';
import { LessonToDo } from 'src/app/shared/models/lessonToDo.model';

import * as fromMenu from './menu-state/menu.reducer';
import * as menuActions from './menu-state/menu.actions';
import * as fromApp from '../../../store/app.interface';

@Injectable({ providedIn: 'root' })
export class MenuFacade {
  lessons$: Observable<Lesson[]> = this.store.pipe(select(fromMenu.selectAll));
  activeLesson$: Observable<Lesson> = this.store.pipe(select(getActiveLesson));
  activeExercise$: Observable<Lesson> = this.store.pipe(
    select(getActiveExercise)
  );
  exercises$: Observable<Exercise[]> = this.store.pipe(select(getExercises));
  temporaryExercises$: Observable<Exercise[]> = this.store.pipe(
    select(getTemporaryExercises)
  );

  constructor(private store: Store<fromApp.AppState>) {}

  loadLessons(): void {
    this.store.dispatch(menuActions.loadLessons());
  }

  saveLesson(lesson: Lesson): void {
    this.store.dispatch(menuActions.saveLesson({ lesson }));
  }

  loadExercises(): void {
    this.store.dispatch(menuActions.loadExercises());
  }

  saveExercise(exercise: Exercise): void {
    this.store.dispatch(menuActions.saveExercise({ exercise }));
  }

  loadTemporaryExercises(): void {
    this.store.dispatch(menuActions.loadTemporaryExercises());
  }

  saveTemporaryExercise(exercise: Exercise): void {
    this.store.dispatch(menuActions.saveTemporaryExercise({ exercise }));
  }

  getActiveLesson(activeLesson: LessonToDo): void {
    this.store.dispatch(menuActions.getActiveLesson({ activeLesson }));
  }

  upsertActiveExercise(activeExercise: Exercise): void {
    this.store.dispatch(menuActions.upsertActiveExercise({ activeExercise }));
  }
}
