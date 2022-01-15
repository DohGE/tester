import { createSelector } from "@ngrx/store";
import * as fromMenus from "./menu-state/menu.reducer";
import { getMenuState } from "./menu-state/menu.reducer";

export const getExercises = createSelector(
    getMenuState,
    (state: fromMenus.menuState) => state.exercises
);

export const getTemporaryExercises = createSelector(
    getMenuState,
    (state: fromMenus.menuState) => state.temporaryExercises
);

export const getActiveLesson = createSelector(
    getMenuState,
    (state: fromMenus.menuState) => state.activeLesson
);

export const getActiveExercise = createSelector(
    getMenuState,
    (state: fromMenus.menuState) => state.activeExercise
);
