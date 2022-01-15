import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Language } from "src/app/shared/models/language.model";
import { Exercise } from "../../../../../shared/models/exercise.model";
import { MenuFacade } from "../../../store/menu.facade";
import * as moment from "moment";

@Component({
    selector: "app-menu-add-lesson-container",
    templateUrl: "./menu-add-lesson-container.component.html",
    styleUrls: ["./menu-add-lesson-container.component.scss"],
})
export class MenuAddLessonContainerComponent implements OnInit {
    exercises: Observable<Exercise[]> = this.menuFacade.exercises$;

    constructor(private menuFacade: MenuFacade) {}

    ngOnInit(): void {
        this.menuFacade.loadExercises();
    }

    onAddLesson([description, name, language]: [
        string,
        string,
        Language
    ]): void {
        this.menuFacade.saveLesson({
            name,
            description,
            language,
            date: moment().locale("pl").format("D MMMM YYYY, HH:mm:ss"),
        });
    }

    onAddExercise(exercise: Exercise): void {
        this.menuFacade.saveTemporaryExercise(exercise);
    }
}
