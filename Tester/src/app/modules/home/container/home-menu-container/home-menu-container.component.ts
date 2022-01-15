import { Component } from "@angular/core";
import { AuthFacade } from "./../../../auth/store/auth.facade";

@Component({
    selector: "app-home-menu-container",
    templateUrl: "./home-menu-container.component.html",
    styleUrls: ["./home-menu-container.component.scss"],
})
export class HomeMenuContainerComponent {
    constructor(private authFacade: AuthFacade) {}

    logout(): void {
        this.authFacade.logout();
    }
}
