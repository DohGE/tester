import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './app.interface';
import { authReducer } from '../modules/auth/store/auth-state/auth.reducer';
import { menuReducer } from '../modules/admin-panel/store/menu-state/menu.reducer';
import { userReducer } from '../modules/user/store/user-state/user.reducer';

export const appReducer: ActionReducerMap<AppState> = {
  auth: authReducer,
  menu: menuReducer,
  user: userReducer,
};
