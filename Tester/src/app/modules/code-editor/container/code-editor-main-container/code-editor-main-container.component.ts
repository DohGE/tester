import { FilesService } from "./../../../../shared/services/files.service";
import { Component } from "@angular/core";
import { MenuFacade } from "src/app/modules/admin-panel/store/menu.facade";
import { Observable } from "rxjs";
import { Exercise } from "src/app/shared/models/exercise.model";

@Component({
    selector: "app-code-editor-main-container",
    templateUrl: "./code-editor-main-container.component.html",
    styleUrls: ["./code-editor-main-container.component.scss"],
})
export class CodeEditorMainContainerComponent {
    activeExercise$: Observable<Exercise> = this.menuFacade.activeExercise$;

    constructor(
        private filesService: FilesService,
        private menuFacade: MenuFacade
    ) {}

    generateZip([codeEditorHTML, codeEditorCSS, codeEditorJS]: [
        string,
        string,
        string
    ]): void {
        this.filesService.generateZip(
            codeEditorHTML,
            codeEditorCSS,
            codeEditorJS
        );
    }
}
