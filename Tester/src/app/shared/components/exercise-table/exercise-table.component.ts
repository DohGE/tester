import {
    Component,
    EventEmitter,
    Input,
    Output,
    ViewChild,
} from "@angular/core";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { Exercise } from "../../models/exercise.model";

@Component({
    selector: "app-exercise-table",
    templateUrl: "./exercise-table.component.html",
    styleUrls: ["./exercise-table.component.scss"],
})
export class ExerciseTableComponent {
    @ViewChild(MatSort) sort: MatSort;
    @Output() addExercise = new EventEmitter<Exercise>();
    @Output() back = new EventEmitter<void>();
    @Input() addExerciseBtn: boolean;
    @Input() public set exercises(exercises: MatTableDataSource<Exercise>) {
        this._exercises = exercises;
        exercises.sort = this.sort;
    }
    public get exercises(): MatTableDataSource<Exercise> {
        return this._exercises;
    }
    private _exercises: MatTableDataSource<Exercise>;

    displayedColumns: string[] = ["name", "language"];
    info = false;
    exerciseInfo: Exercise;

    onBack(): void {
        this.back.emit();
    }

    onInfo(exercise: Exercise): void {
        this.info = true;
        this.exerciseInfo = exercise;
    }

    onAddExercise(exercise: Exercise): void {
        this.addExercise.emit(exercise);
    }
}
