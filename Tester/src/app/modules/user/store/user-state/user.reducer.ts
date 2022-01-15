import { createFeatureSelector, createReducer, on } from "@ngrx/store";
import { SchoolClass } from "src/app/shared/models/schoolClass.model";
import { User } from "../../../../shared/models/user.model";
import * as userActions from "./user.actions";

export interface userState {
    user: User | null;
    schoolUsers: User[];
    schoolClasses: SchoolClass[];
    error: string;
}

export const userInitialState = {
    user: null,
    schoolUsers: [],
    schoolClasses: [],
    error: "",
};

export const getUserState = createFeatureSelector<userState>("user");

export const userReducer = createReducer(
    userInitialState,

    on(
        userActions.loadUserFail,
        userActions.saveUserFail,
        userActions.loadSchoolClassesFail,
        userActions.loadSchoolUsersFail,
        userActions.saveSchoolUsersFail,
        (state, action) => {
            return { ...state, error: action.error };
        }
    ),

    on(
        userActions.saveUserSuccess,
        userActions.loadUserSuccess,
        (state, action) => {
            return { ...state, user: action.user };
        }
    ),

    on(
        userActions.saveSchoolUsersSuccess,
        userActions.loadSchoolUsersSuccess,
        (state, action) => {
            return { ...state, schoolUsers: action.schoolUsers };
        }
    ),

    on(userActions.loadSchoolClassesSuccess, (state, action) => {
        return { ...state, schoolClasses: action.schoolClasses };
    })
);
