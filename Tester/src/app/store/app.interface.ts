import * as fromAuth from "../modules/auth/store/auth-state/auth.reducer";
import * as fromMenu from "../modules/admin-panel/store/menu-state/menu.reducer";
import * as fromUser from "../modules/user/store/user-state/user.reducer";

export interface AppState {
    auth: fromAuth.authState;
    menu: fromMenu.menuState;
    user: fromUser.userState;
}
