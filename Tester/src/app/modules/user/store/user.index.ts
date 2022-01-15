import { createSelector } from '@ngrx/store';
import * as fromUser from './user-state/user.reducer';
import { getUserState } from './user-state/user.reducer';

export const getUser = createSelector(
  getUserState,
  (state: fromUser.userState) => state.user
);

export const getSchoolUsers = createSelector(
  getUserState,
  (state: fromUser.userState) => state.schoolUsers
);

export const getSchoolClasses = createSelector(
  getUserState,
  (state: fromUser.userState) => state.schoolClasses
);
