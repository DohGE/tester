import {
    AfterViewChecked,
    Component,
    ElementRef,
    EventEmitter,
    Input,
    Output,
    ViewChild,
} from "@angular/core";
import { Exercise } from "src/app/shared/models/exercise.model";
import { Lesson } from "src/app/shared/models/lesson.model";

@Component({
    selector: "app-task-start-presenter",
    templateUrl: "./task-start-presenter.component.html",
    styleUrls: ["./task-start-presenter.component.scss"],
})
export class TaskStartPresenterComponent implements AfterViewChecked {
    @ViewChild("iframe") iFrame: ElementRef;
    @Output() startExercise = new EventEmitter<Exercise>();
    activeLesson: Lesson = {
        name: "asd",
        description: "asdasd",
        exercises: [
            { name: "asd", description: "asd", language: { CSS: true } },
        ],
        language: { CSS: true },
    };

    doc: any;

    ngAfterViewChecked(): void {
        this.doc =
            this.iFrame.nativeElement.contentDocument ||
            this.iFrame.nativeElement.contentWindow;
        this.doc.open();
        this.doc.write(
            `<!DOCTYPE HTML>
                <html>
                <head>
                    <meta charset="UTF-8">
                    <title>Lekcja</title>
                </head>
                <body>
                    ${this.activeLesson?.description}
                </body>
                </html>
                `
        );
        this.doc.close();
    }

    onStartExercise(exercise: Exercise): void {
        this.startExercise.emit(exercise);
    }
}
