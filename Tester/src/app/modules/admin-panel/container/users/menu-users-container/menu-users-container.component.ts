import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { UserFacade } from "src/app/modules/user/store/user.facade";
import { SchoolClass } from "src/app/shared/models/schoolClass.model";
import { User } from "src/app/shared/models/user.model";

@Component({
    selector: "app-menu-users-container",
    templateUrl: "./menu-users-container.component.html",
    styleUrls: ["./menu-users-container.component.scss"],
})
export class MenuUsersContainerComponent implements OnInit {
    schoolUsers$: Observable<MatTableDataSource<User>> =
        this.userFacade.schoolUsers$.pipe(
            map((users: User[]) => {
                return new MatTableDataSource(users);
            })
        );
    schoolClasses: Observable<SchoolClass[]> = this.userFacade.schoolClasses$;

    constructor(private userFacade: UserFacade) {}

    ngOnInit(): void {
        this.userFacade.loadSchoolUsers();
        this.userFacade.loadSchoolClasses();
    }
}
