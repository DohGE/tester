import { Lesson } from "./../../../shared/models/lesson.model";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { take, exhaustMap } from "rxjs/operators";
import { SchoolClass } from "src/app/shared/models/schoolClass.model";
import { Auth } from "../../../shared/models/auth.model";
import { User } from "../../../shared/models/user.model";
import { AuthFacade } from "../../auth/store/auth.facade";

@Injectable({
    providedIn: "root",
})
export class UserService {
    private readonly endpoints = {
        link: "https://tester-8d3bc-default-rtdb.europe-west1.firebasedatabase.app/",
        users: "users/",
        schoolUsers: "schoolUsers.json",
        schoolClasses: "schoolClasses.json",
        addLessonToSchoolUsers: "",
    };
    constructor(private http: HttpClient, private authFacade: AuthFacade) {}

    saveUser(user: User): Observable<User> {
        return this.authFacade.auth$.pipe(
            take(1),
            exhaustMap((auth: Auth) => {
                return this.http.put<User>(
                    `${this.endpoints.link}   ${this.endpoints.users}  ${auth.localId}.json`,
                    user,
                    {
                        params: new HttpParams().set("auth", auth?.idToken),
                    }
                );
            })
        );
    }

    loadUser(): Observable<User> {
        return this.authFacade.auth$.pipe(
            take(1),
            exhaustMap((auth: Auth) => {
                return this.http.get<User>(
                    "https://tester-8d3bc-default-rtdb.europe-west1.firebasedatabase.app/users/d65RndmejrP3AiPIPXi7Hc6pFon2.json",
                    {
                        params: new HttpParams().set("auth", auth?.idToken),
                    }
                );
            })
        );
    }

    saveSchoolUsers(users: User[]): Observable<User[]> {
        return this.authFacade.auth$.pipe(
            take(1),
            exhaustMap((auth: Auth) => {
                return this.http.put<User[]>(
                    this.endpoints.link + this.endpoints.schoolUsers,
                    users,
                    {
                        params: new HttpParams().set("auth", auth?.idToken),
                    }
                );
            })
        );
    }

    loadSchoolUsers(): Observable<User[]> {
        return this.authFacade.auth$.pipe(
            take(1),
            exhaustMap((auth: Auth) => {
                return this.http.get<User[]>(
                    this.endpoints.link + this.endpoints.schoolUsers,
                    {
                        params: new HttpParams().set("auth", auth?.idToken),
                    }
                );
            })
        );
    }

    loadSchoolClasses(): Observable<SchoolClass[]> {
        return this.authFacade.auth$.pipe(
            take(1),
            exhaustMap((auth: Auth) => {
                return this.http.get<SchoolClass[]>(
                    this.endpoints.link + this.endpoints.schoolClasses,
                    {
                        params: new HttpParams().set("auth", auth?.idToken),
                    }
                );
            })
        );
    }

    addLessonToSchoolUsers(
        lesson: Lesson,
        scholClass: string
    ): Observable<User[]> {
        return this.authFacade.auth$.pipe(
            take(1),
            exhaustMap((auth: Auth) => {
                return this.http.put<User[]>(
                    this.endpoints.link + this.endpoints.addLessonToSchoolUsers,
                    { lesson, scholClass },
                    {
                        params: new HttpParams().set("auth", auth?.idToken),
                    }
                );
            })
        );
    }
}
