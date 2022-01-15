import { Lesson } from "./../../../../shared/models/lesson.model";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import {
    catchError,
    exhaustMap,
    map,
    switchMap,
    withLatestFrom,
} from "rxjs/operators";
import { MenuService } from "../../services/menu.service";
import { Exercise } from "../../../../shared/models/exercise.model";
import { select, Store } from "@ngrx/store";

import * as menuActions from "./menu.actions";
import * as fromApp from "../../../../store/app.interface";
import { getTemporaryExercises } from "../menu.index";
import { NotificationService } from "src/app/shared/services/notification.service";

@Injectable()
export class MenuEffects {
    constructor(
        private actions$: Actions,
        private menuService: MenuService,
        private store: Store<fromApp.AppState>,
        private notificationService: NotificationService
    ) {}

    loadExercises$ = createEffect(() =>
        this.actions$.pipe(
            ofType(menuActions.loadExercises),
            exhaustMap(() =>
                this.menuService.loadExercises().pipe(
                    map((exercises: Exercise[]) =>
                        menuActions.loadExercisesSuccess({ exercises })
                    ),
                    catchError((error) => {
                        return of(
                            menuActions.loadExercisesFail({
                                error: error.error,
                            })
                        );
                    })
                )
            )
        )
    );

    saveExercise$ = createEffect(() =>
        this.actions$.pipe(
            ofType(menuActions.saveExercise),
            switchMap((action) =>
                this.menuService.saveExercise(action.exercise).pipe(
                    map(() => {
                        this.notificationService.showSuccess(
                            "Pomyślnie utworzono zadanie",
                            "Sukces"
                        );
                        return menuActions.saveExerciseSuccess({
                            exercise: action.exercise,
                        });
                    }),
                    catchError((error) => {
                        this.notificationService.showError(
                            "Coś poszło nie tak",
                            "Error"
                        );
                        return of(
                            menuActions.saveExerciseFail({ error: error.error })
                        );
                    })
                )
            )
        )
    );

    loadTemporaryExercises$ = createEffect(() =>
        this.actions$.pipe(
            ofType(menuActions.loadTemporaryExercises),
            exhaustMap(() =>
                this.menuService.loadTemporaryExercises().pipe(
                    map((exercises: Exercise[]) =>
                        menuActions.loadTemporaryExercisesSuccess({ exercises })
                    ),
                    catchError((error) => {
                        return of(
                            menuActions.loadTemporaryExercisesFail({
                                error: error.error,
                            })
                        );
                    })
                )
            )
        )
    );

    saveTemporaryExercise$ = createEffect(() =>
        this.actions$.pipe(
            ofType(menuActions.saveTemporaryExercise),
            switchMap((action) =>
                this.menuService.saveTemporaryExercise(action.exercise).pipe(
                    map(() => {
                        this.notificationService.showSuccess(
                            "Dodano zadanie do lekcji",
                            "Sukces"
                        );
                        return menuActions.saveTemporaryExerciseSuccess({
                            exercise: action.exercise,
                        });
                    }),
                    catchError((error) => {
                        this.notificationService.showError(
                            "Coś poszło nie tak",
                            "Error"
                        );
                        return of(
                            menuActions.saveTemporaryExerciseFail({
                                error: error.error,
                            })
                        );
                    })
                )
            )
        )
    );

    loadLessons$ = createEffect(() =>
        this.actions$.pipe(
            ofType(menuActions.loadLessons),
            exhaustMap(() =>
                this.menuService.loadLessons().pipe(
                    map((lessons: Lesson[]) =>
                        menuActions.loadLessonsSuccess({ lessons })
                    ),
                    catchError((error) => {
                        return of(
                            menuActions.loadLessonsFail({ error: error.error })
                        );
                    })
                )
            )
        )
    );

    saveLesson$ = createEffect(() =>
        this.actions$.pipe(
            ofType(menuActions.saveLesson),
            withLatestFrom(this.store.pipe(select(getTemporaryExercises))),
            switchMap(([action, temporaryExercises]) =>
                this.menuService
                    .saveLesson({ ...action.lesson, ...temporaryExercises })
                    .pipe(
                        map(() => {
                            this.notificationService.showSuccess(
                                "Pomyślnie zapisano lekcje",
                                "Sukces"
                            );
                            return menuActions.saveLessonSuccess({
                                lesson: {
                                    ...action.lesson,
                                    ...temporaryExercises,
                                },
                            });
                        }),
                        catchError((error) => {
                            this.notificationService.showError(
                                "Coś poszło nie tak",
                                "Error"
                            );
                            return of(
                                menuActions.saveLessonFail({
                                    error: error.error,
                                })
                            );
                        })
                    )
            )
        )
    );

    getActiveLesson$ = createEffect(() =>
        this.actions$.pipe(
            ofType(menuActions.getActiveLesson),
            switchMap((action) =>
                this.menuService.getActiveLesson(action.activeLesson).pipe(
                    map((activeLesson: Lesson) =>
                        menuActions.getActiveLessonSuccess({ activeLesson })
                    ),
                    catchError((error) => {
                        return of(
                            menuActions.getActiveLessonFail({
                                error: error.error,
                            })
                        );
                    })
                )
            )
        )
    );
}
