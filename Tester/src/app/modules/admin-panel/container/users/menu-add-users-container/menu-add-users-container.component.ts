import { User } from "../../../../../shared/models/user.model";
import { Component } from "@angular/core";
import { NgxCsvParser, NgxCSVParserError } from "ngx-csv-parser";
import { FilesService } from "../../../../../shared/services/files.service";
import { NotificationService } from "../../../../../shared/services/notification.service";
import { nanoid } from "nanoid";
import { UserFacade } from "src/app/modules/user/store/user.facade";

@Component({
    selector: "app-menu-add-users-container",
    templateUrl: "./menu-add-users-container.component.html",
    styleUrls: ["./menu-add-users-container.component.scss"],
})
export class MenuAddUsersContainerComponent {
    settings = { fileName: "Uczniowie", extraLength: 4 };
    csvRecords: string[] = [];
    newUsers: User[] = [];
    header = false;

    constructor(
        private ngxCsvParser: NgxCsvParser,
        private notificationService: NotificationService,
        private filesService: FilesService,
        private userFacade: UserFacade
    ) {}

    parseFile([schoolClass, files]: [name: string, files: File[]]): void {
        let fileBoolean = false;
        this.ngxCsvParser
            .parse(files[0], { header: false, delimiter: "," })
            .subscribe(
                (result: Array<any>) => {
                    this.csvRecords = result;
                    fileBoolean = true;
                },
                (error: NgxCSVParserError) => {
                    if (
                        error.message !==
                        "Unknown error. Please refer to official documentation for library usage."
                    ) {
                        this.notificationService.showError(
                            "Podany format pliku jest nieprawidłowy",
                            "Błąd"
                        );
                        fileBoolean = false;
                    }
                },
                () => {
                    if (fileBoolean) {
                        this.onAddData(schoolClass);
                    }
                }
            );
    }

    onAddData(schoolClass: string): void {
        this.newUsers = [];
        this.csvRecords.forEach((record: string) => {
            const a = record[0].split(";");
            this.newUsers.push({
                name: a[0],
                surename: a[1],
                login: a[0] + a[1] + nanoid(4).toUpperCase(),
                password: nanoid(10),
                schoolClass: schoolClass,
            });
        });
        this.userFacade.saveSchoolUsers(this.newUsers);
    }

    onDownload(): void {
        if (!this.newUsers) {
            this.notificationService.showError("Nie stworzono uczniów", "Błąd");
        } else {
            this.filesService.downloadJsonToExcel(this.newUsers);
        }
    }
}
