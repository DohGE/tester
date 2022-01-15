import { createAction, props } from "@ngrx/store";
import { SchoolClass } from "src/app/shared/models/schoolClass.model";
import { User } from "../../../../shared/models/user.model";
import { Lesson } from "src/app/shared/models/lesson.model";

export const loadUser = createAction("[User] Load User");

export const loadUserSuccess = createAction(
    "[User] Load User Success",
    props<{ user: User }>()
);

export const loadUserFail = createAction(
    "[User] Load User Fail",
    props<{ error: string }>()
);

export const saveUser = createAction(
    "[User] Save User",
    props<{ user: User }>()
);

export const saveUserSuccess = createAction(
    "[User] Save User Success",
    props<{ user: User }>()
);

export const saveUserFail = createAction(
    "[User] Save User Fail",
    props<{ error: string }>()
);

export const loadSchoolUsers = createAction("[User] Load School Users");

export const loadSchoolUsersSuccess = createAction(
    "[User] Load School Users Success",
    props<{ schoolUsers: User[] }>()
);

export const loadSchoolUsersFail = createAction(
    "[User] Load School Users Fail",
    props<{ error: string }>()
);

export const saveSchoolUsers = createAction(
    "[User] Save School Users",
    props<{ schoolUsers: User[] }>()
);

export const saveSchoolUsersSuccess = createAction(
    "[User] Save School Users Success",
    props<{ schoolUsers: User[] }>()
);

export const saveSchoolUsersFail = createAction(
    "[User] Save School Users Fail",
    props<{ error: string }>()
);

export const loadSchoolClasses = createAction("[User] Load School Classes");

export const loadSchoolClassesSuccess = createAction(
    "[User] Load School Classes Success",
    props<{ schoolClasses: SchoolClass[] }>()
);

export const loadSchoolClassesFail = createAction(
    "[User] Load School Classes Fail",
    props<{ error: string }>()
);

export const addLessonToSchoolUsers = createAction(
    "[User] Add Lesson To School Users",
    props<{ lesson: Lesson; schoolClass: string }>()
);

export const addLessonToSchoolUsersSuccess = createAction(
    "[User] Add Lesson To School Users Success",
    props<{ lesson: Lesson; schoolClass: string }>()
);

export const addLessonToSchoolUsersFail = createAction(
    "[User] Add Lesson To School Users Fail",
    props<{ error: string }>()
);
