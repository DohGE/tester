import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { exhaustMap, map, take } from "rxjs/operators";
import { Exercise } from "./../../../shared/models/exercise.model";
import { Auth } from "../../../shared/models/auth.model";
import { Lesson } from "../../../shared/models/lesson.model";
import { AuthFacade } from "../../auth/store/auth.facade";
import { LessonToDo } from "src/app/shared/models/lessonToDo.model";

@Injectable({
    providedIn: "root",
})
export class MenuService {
    private readonly endpoints = {
        link: "https://tester-8d3bc-default-rtdb.europe-west1.firebasedatabase.app/",
        lessons: "lessons.json",
        exercise: "exercise.json",
        temporaryExercise: "temporaryExercise.json",
    };
    constructor(private http: HttpClient, private authFacade: AuthFacade) {}

    loadLessons(): Observable<Lesson[]> {
        return this.authFacade.auth$.pipe(
            take(1),
            exhaustMap((auth: Auth) => {
                return this.http
                    .get<Lesson[]>(
                        this.endpoints.link + this.endpoints.lessons,
                        {
                            params: new HttpParams().set("auth", auth?.idToken),
                        }
                    )
                    .pipe(
                        map((lessons: Lesson[]) => {
                            return lessons.map((lesson, index) => {
                                return { ...lesson, id: index };
                            });
                        })
                    );
            })
        );
    }

    saveLesson(lesson: Lesson): Observable<Lesson> {
        return this.authFacade.auth$.pipe(
            take(1),
            exhaustMap((auth: Auth) => {
                return this.http.post<Lesson>(
                    this.endpoints.link + this.endpoints.lessons,
                    lesson,
                    {
                        params: new HttpParams().set("auth", auth?.idToken),
                    }
                );
            })
        );
    }

    loadExercises(): Observable<Exercise[]> {
        return this.authFacade.auth$.pipe(
            take(1),
            exhaustMap((auth: Auth) => {
                return this.http
                    .get<Exercise[]>(
                        this.endpoints.link + this.endpoints.exercise,
                        {
                            params: new HttpParams().set("auth", auth?.idToken),
                        }
                    )
                    .pipe(
                        map((exercises: Exercise[]) => {
                            return exercises.map((exercise, index) => {
                                return { ...exercise, id: index };
                            });
                        })
                    );
            })
        );
    }

    saveExercise(exercise: Exercise): Observable<Exercise> {
        return this.authFacade.auth$.pipe(
            take(1),
            exhaustMap((auth: Auth) => {
                return this.http.post<Exercise>(
                    this.endpoints.link + this.endpoints.exercise,
                    exercise,
                    {
                        params: new HttpParams().set("auth", auth?.idToken),
                    }
                );
            })
        );
    }

    saveTemporaryExercise(exercise: Exercise): Observable<Exercise> {
        return this.authFacade.auth$.pipe(
            take(1),
            exhaustMap((auth: Auth) => {
                return this.http.post<Exercise>(
                    this.endpoints.link + this.endpoints.temporaryExercise,
                    exercise,
                    {
                        params: new HttpParams().set("auth", auth?.idToken),
                    }
                );
            })
        );
    }

    loadTemporaryExercises(): Observable<Exercise[]> {
        return this.authFacade.auth$.pipe(
            take(1),
            exhaustMap((auth: Auth) => {
                return this.http
                    .get<Exercise[]>(
                        this.endpoints.link + this.endpoints.temporaryExercise,
                        {
                            params: new HttpParams().set("auth", auth?.idToken),
                        }
                    )
                    .pipe(
                        map((exercises: Exercise[]) => {
                            return exercises.map((exercise, index) => {
                                return { ...exercise, id: index };
                            });
                        })
                    );
            })
        );
    }

    getActiveLesson(activeLesson: LessonToDo): Observable<Lesson> {
        return this.authFacade.auth$.pipe(
            take(1),
            exhaustMap((auth: Auth) => {
                return this.http.post<Lesson>(
                    this.endpoints.link + this.endpoints.lessons,
                    activeLesson,
                    {
                        params: new HttpParams().set("auth", auth?.idToken),
                    }
                );
            })
        );
    }
}
