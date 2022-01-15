import { Component } from "@angular/core";

@Component({
    selector: "app-menu-main-presenter",
    templateUrl: "./menu-main-presenter.component.html",
    styleUrls: ["./menu-main-presenter.component.scss"],
})
export class MenuMainPresenterComponent {
    expanded = false;

    onToggleMenu(): void {
        this.expanded = !this.expanded;
    }
}
