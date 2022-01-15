import { Component, EventEmitter, Input, Output } from "@angular/core";
import { LessonToDo } from "src/app/shared/models/lessonToDo.model";
import { User } from "src/app/shared/models/user.model";

@Component({
    selector: "app-task-main-presenter",
    templateUrl: "./task-main-presenter.component.html",
    styleUrls: ["./task-main-presenter.component.scss"],
})
export class TaskMainPresenterComponent {
    @Output() startLesson = new EventEmitter<LessonToDo>();
    @Input() user: User;

    onStartLesson(activeLesson: LessonToDo): void {
        this.startLesson.emit(activeLesson);
    }
}
