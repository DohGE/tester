import { Component, EventEmitter, Input, Output } from "@angular/core";
import { User } from "../../../../shared/models/user.model";

@Component({
    selector: "app-user-profile-presenter",
    templateUrl: "./user-profile-presenter.component.html",
    styleUrls: ["./user-profile-presenter.component.scss"],
})
export class UserProfilePresenterComponent {
    @Output() changePassword = new EventEmitter<void>();
    @Input() user: User;

    onChangePassword(): void {
        this.changePassword.emit();
    }
}
