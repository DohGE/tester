import { User } from "./../../../../shared/models/user.model";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { switchMap, map, catchError } from "rxjs/operators";
import { UserService } from "../../services/user.service";
import * as userActions from "./user.actions";
import { SchoolClass } from "src/app/shared/models/schoolClass.model";
import { NotificationService } from "src/app/shared/services/notification.service";

@Injectable()
export class UserEffects {
    constructor(
        private actions$: Actions,
        private userService: UserService,
        private notificationService: NotificationService
    ) {}

    saveUser$ = createEffect(() =>
        this.actions$.pipe(
            ofType(userActions.saveUser),
            switchMap((action) =>
                this.userService.saveUser(action.user).pipe(
                    map(() => {
                        this.notificationService.showSuccess(
                            "Pomyślnie zapisano informacje",
                            "Sukces"
                        );
                        return userActions.saveUserSuccess({
                            user: action.user,
                        });
                    }),
                    catchError((error) => {
                        this.notificationService.showError(
                            "Coś poszło nie tak",
                            "Error"
                        );
                        return of(
                            userActions.saveUserFail({
                                error: error.error.error.message,
                            })
                        );
                    })
                )
            )
        )
    );

    loadUser$ = createEffect(() =>
        this.actions$.pipe(
            ofType(userActions.loadUser),
            switchMap(() =>
                this.userService.loadUser().pipe(
                    map((user: User) =>
                        userActions.loadUserSuccess({
                            user: user,
                        })
                    ),
                    catchError((error) =>
                        of(
                            userActions.loadUserFail({
                                error: error.error.error.message,
                            })
                        )
                    )
                )
            )
        )
    );

    saveSchoolUsers$ = createEffect(() =>
        this.actions$.pipe(
            ofType(userActions.saveSchoolUsers),
            switchMap((action) =>
                this.userService.saveSchoolUsers(action.schoolUsers).pipe(
                    map(() => {
                        this.notificationService.showSuccess(
                            "Pomyślnie utworzono użytkowników",
                            "Sukces"
                        );
                        return userActions.saveSchoolUsersSuccess({
                            schoolUsers: action.schoolUsers,
                        });
                    }),
                    catchError((error) => {
                        this.notificationService.showError(
                            "Coś poszło nie tak",
                            "Error"
                        );
                        return of(
                            userActions.saveSchoolUsersFail({
                                error: error.error.error.message,
                            })
                        );
                    })
                )
            )
        )
    );

    loadSchoolUsers$ = createEffect(() =>
        this.actions$.pipe(
            ofType(userActions.loadSchoolUsers),
            switchMap(() =>
                this.userService.loadSchoolUsers().pipe(
                    map((schoolUsers: User[]) =>
                        userActions.loadSchoolUsersSuccess({
                            schoolUsers,
                        })
                    ),
                    catchError((error) =>
                        of(
                            userActions.loadSchoolUsersFail({
                                error: error.error.error.message,
                            })
                        )
                    )
                )
            )
        )
    );

    loadSchoolClasses$ = createEffect(() =>
        this.actions$.pipe(
            ofType(userActions.loadSchoolClasses),
            switchMap(() =>
                this.userService.loadSchoolClasses().pipe(
                    map((schoolClasses: SchoolClass[]) =>
                        userActions.loadSchoolClassesSuccess({
                            schoolClasses,
                        })
                    ),
                    catchError((error) =>
                        of(
                            userActions.loadSchoolClassesFail({
                                error: error.error.error.message,
                            })
                        )
                    )
                )
            )
        )
    );

    addLessonToSchoolUsers$ = createEffect(() =>
        this.actions$.pipe(
            ofType(userActions.addLessonToSchoolUsers),
            switchMap((action) =>
                this.userService
                    .addLessonToSchoolUsers(action.lesson, action.schoolClass)
                    .pipe(
                        map(() => {
                            this.notificationService.showSuccess(
                                "Pomyślnie utworzono użytkowników",
                                "Sukces"
                            );
                            return userActions.addLessonToSchoolUsersSuccess({
                                lesson: action.lesson,
                                schoolClass: action.schoolClass,
                            });
                        }),
                        catchError((error) => {
                            this.notificationService.showError(
                                "Coś poszło nie tak",
                                "Error"
                            );
                            return of(
                                userActions.addLessonToSchoolUsersFail({
                                    error: error.error.error.message,
                                })
                            );
                        })
                    )
            )
        )
    );
}
