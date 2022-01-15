import { Exercise } from "../../../../../shared/models/exercise.model";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { MenuFacade } from "../../../store/menu.facade";

@Component({
    selector: "app-menu-exercise-container",
    templateUrl: "./menu-exercise-container.component.html",
    styleUrls: ["./menu-exercise-container.component.scss"],
})
export class MenuExerciseContainerComponent implements OnInit {
    exercises: Observable<Exercise[]> = this.menuFacade.exercises$;

    constructor(private menuFacade: MenuFacade) {}

    ngOnInit(): void {
        this.menuFacade.loadExercises();
    }
}
