import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Lesson } from 'src/app/shared/models/lesson.model';
import { SchoolClass } from 'src/app/shared/models/schoolClass.model';
import { User } from '../../../shared/models/user.model';
import * as fromApp from '../../../store/app.interface';
import * as userActions from './user-state/user.actions';
import { getUser, getSchoolUsers, getSchoolClasses } from './user.index';

@Injectable({ providedIn: 'root' })
export class UserFacade {
  user$: Observable<User> = this.store.pipe(select(getUser));
  schoolUsers$: Observable<User[]> = this.store.pipe(select(getSchoolUsers));
  schoolClasses$: Observable<SchoolClass[]> = this.store.pipe(
    select(getSchoolClasses)
  );

  constructor(private store: Store<fromApp.AppState>) {}

  saveUser(user: User): void {
    this.store.dispatch(userActions.saveUser({ user }));
  }

  loadUser(): void {
    this.store.dispatch(userActions.loadUser());
  }

  saveSchoolUsers(schoolUsers: User[]): void {
    this.store.dispatch(userActions.saveSchoolUsers({ schoolUsers }));
  }

  loadSchoolUsers(): void {
    this.store.dispatch(userActions.loadSchoolUsers());
  }

  loadSchoolClasses(): void {
    this.store.dispatch(userActions.loadSchoolClasses());
  }

  addLessonToSchoolUsers(lesson: Lesson, schoolClass: string): void {
    this.store.dispatch(
      userActions.addLessonToSchoolUsers({ lesson, schoolClass })
    );
  }
}
