import { Lesson } from "./../../../../shared/models/lesson.model";
import { createAction, props } from "@ngrx/store";
import { Exercise } from "../../../../shared/models/exercise.model";
import { LessonToDo } from "src/app/shared/models/lessonToDo.model";

export const loadExercises = createAction("[Menu] Load Exercises");

export const loadExercisesSuccess = createAction(
    "[Menu] Load Exercises Success",
    props<{ exercises: Exercise[] }>()
);

export const loadExercisesFail = createAction(
    "[Menu] Load Exercises Fail",
    props<{ error: string }>()
);

export const saveExercise = createAction(
    "[Menu] Save Exercise",
    props<{ exercise: Exercise }>()
);

export const saveExerciseSuccess = createAction(
    "[Menu] Save Exercise Success",
    props<{ exercise: Exercise }>()
);

export const saveExerciseFail = createAction(
    "[Menu] Save Exercise Fail",
    props<{ error: string }>()
);

export const loadTemporaryExercises = createAction(
    "[Menu] Load Temporary Exercises"
);

export const loadTemporaryExercisesSuccess = createAction(
    "[Menu] Load Temporary Exercises Success",
    props<{ exercises: Exercise[] }>()
);

export const loadTemporaryExercisesFail = createAction(
    "[Menu] Load Temporary Exercises Fail",
    props<{ error: string }>()
);

export const saveTemporaryExercise = createAction(
    "[Menu] Save Temporary Exercise",
    props<{ exercise: Exercise }>()
);

export const saveTemporaryExerciseSuccess = createAction(
    "[Menu] Save Temporary Exercise Success",
    props<{ exercise: Exercise }>()
);

export const saveTemporaryExerciseFail = createAction(
    "[Menu] Save Temporary Exercise Fail",
    props<{ error: string }>()
);

export const loadLessons = createAction("[Menu] Load Lessons");

export const loadLessonsSuccess = createAction(
    "[Menu] Load Lessons Success",
    props<{ lessons: Lesson[] }>()
);

export const loadLessonsFail = createAction(
    "[Menu] Load Lessons Fail",
    props<{ error: string }>()
);

export const saveLesson = createAction(
    "[Menu] Save Lesson",
    props<{ lesson: Lesson }>()
);

export const saveLessonSuccess = createAction(
    "[Menu] Save Lesson Success",
    props<{ lesson: Lesson }>()
);

export const saveLessonFail = createAction(
    "[Menu] Save Lesson Fail",
    props<{ error: string }>()
);

export const getActiveLesson = createAction(
    "[Menu] Get Active Lesson",
    props<{ activeLesson: LessonToDo }>()
);

export const getActiveLessonSuccess = createAction(
    "[Menu] Get Active Lesson Success",
    props<{ activeLesson: Lesson }>()
);

export const getActiveLessonFail = createAction(
    "[Menu] Get Active Lesson Fail",
    props<{ error: string }>()
);

export const upsertActiveExercise = createAction(
    "[Menu] Upsers Active Exercise",
    props<{ activeExercise: Exercise }>()
);

