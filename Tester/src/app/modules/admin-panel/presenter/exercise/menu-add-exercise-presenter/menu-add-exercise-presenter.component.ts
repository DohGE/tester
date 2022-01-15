import { Language } from "../../../../../shared/models/language.model";
import { Component, EventEmitter, Output } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Exercise } from "../../../../../shared/models/exercise.model";

@Component({
    selector: "app-menu-add-exercise-presenter",
    templateUrl: "./menu-add-exercise-presenter.component.html",
    styleUrls: ["./menu-add-exercise-presenter.component.scss"],
})
export class MenuAddExercisePresenterComponent {
    @Output() save = new EventEmitter<Exercise>();

    form: FormGroup = new FormGroup({
        name: new FormControl(null, Validators.required),
        description: new FormControl(null, [
            Validators.required,
            Validators.minLength(10),
        ]),
        solution: new FormControl(null, [
            Validators.required,
            Validators.minLength(10),
        ]),
    });
    language: Language;
    clear = false;
    error = false;

    example = false;
    exampleSrc = "";
    exampleAlt = "";

    onSave(): void {
        this.form.markAllAsTouched();
        this.error = true;
        if (this.form.valid && this.language) {
            const filterLanguage = <Language>{};
            Object.entries(this.language).forEach(([key, value]) => {
                if (value) {
                    return (filterLanguage[key] = this.language[key]);
                }
            });
            this.save.emit({ ...this.form.value, language: filterLanguage });
            this.form.reset();
            this.clear = true;
            this.error = false;
        }
    }
}
