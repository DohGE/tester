import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { MenuFacade } from "src/app/modules/admin-panel/store/menu.facade";
import { Exercise } from "src/app/shared/models/exercise.model";
import { Lesson } from "src/app/shared/models/lesson.model";

@Component({
    selector: "app-task-start-container",
    templateUrl: "./task-start-container.component.html",
    styleUrls: ["./task-start-container.component.scss"],
})
export class TaskStartContainerComponent {
    activeLesson$: Observable<Lesson> = this.menuFacade.activeLesson$;

    constructor(private menuFacade: MenuFacade) {}

    onStartExercise(exercise: Exercise): void {
        this.menuFacade.upsertActiveExercise(exercise);
    }
}
