import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createFeatureSelector, createReducer, on } from '@ngrx/store';
import { Exercise } from '../../../../shared/models/exercise.model';
import { Lesson } from '../../../../shared/models/lesson.model';

import * as menuActions from './menu.actions';

export interface menuState extends EntityState<Lesson> {
  exercises: Exercise[];
  temporaryExercises: Exercise[];
  activeLesson: Lesson | null;
  activeExercise: Exercise | null;
  error: any | null;
}

export const menuAdapter: EntityAdapter<Lesson> = createEntityAdapter<Lesson>();

export const menuInitialState = menuAdapter.getInitialState({
  exercises: [],
  temporaryExercises: [],
  activeLesson: null,
  activeExercise: null,
  error: null,
});

export const getMenuState = createFeatureSelector<menuState>('menu');

export const menuReducer = createReducer(
  menuInitialState,

  on(menuActions.loadExercisesSuccess, (state, action) => {
    return { ...state, exercises: [...action.exercises] };
  }),

  on(menuActions.saveExerciseSuccess, (state, action) => {
    const exercise = { ...action.exercise, id: state.ids.length };
    return { ...state, exercises: [exercise, ...state.exercises] };
  }),

  on(menuActions.loadTemporaryExercisesSuccess, (state, action) => {
    return { ...state, temporaryExercises: [...action.exercises] };
  }),

  on(menuActions.saveTemporaryExerciseSuccess, (state, action) => {
    const exercise = { ...action.exercise, id: state.ids.length };
    return { ...state, temporaryExercises: [exercise, ...state.exercises] };
  }),

  on(menuActions.loadLessonsSuccess, (state, action) => {
    return menuAdapter.upsertMany(action.lessons, state);
  }),

  on(menuActions.saveLessonSuccess, (state, action) => {
    return menuAdapter.addOne(action.lesson, state);
  }),

  on(menuActions.getActiveLessonSuccess, (state, action) => {
    return { ...state, activeLesson: action.activeLesson };
  }),

  on(menuActions.upsertActiveExercise, (state, action) => {
    return { ...state, activeLesson: action.activeExercise };
  }),

  on(
    menuActions.loadExercisesFail,
    menuActions.saveExerciseFail,
    menuActions.loadLessonsFail,
    menuActions.saveLessonFail,
    menuActions.saveTemporaryExerciseFail,
    menuActions.loadTemporaryExercisesFail,
    menuActions.getActiveLessonFail,
    (state, action) => {
      return { ...state, error: action.error };
    }
  )
);

export const { selectIds, selectEntities, selectAll, selectTotal } =
  menuAdapter.getSelectors(getMenuState);
