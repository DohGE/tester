import {
    Component,
    EventEmitter,
    Input,
    OnDestroy,
    Output,
} from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { Language } from "../../models/language.model";
import { requireAtLeastOneCheckBox } from "../../validators/checkboxValidate";

@Component({
    selector: "app-add-language",
    templateUrl: "./add-language.component.html",
    styleUrls: ["./add-language.component.scss"],
})
export class AddLanguageComponent implements OnDestroy {
    @Output() languages = new EventEmitter<Language>();
    @Input() public set clear(clear: boolean) {
        this._clear = clear;
        if (clear) {
            this.form.reset();
        }
    }
    public get clear(): boolean {
        return this._clear;
    }
    private _clear: boolean;
    @Input() public set error(error: boolean) {
        this._error = error;
        if (error) {
            this.form.markAllAsTouched();
        }
    }
    public get error(): boolean {
        return this._error;
    }
    private _error: boolean;

    names = ["HTML", "CSS", "JavaScript", "PHP", "MySql"];
    destroy$: Subject<boolean> = new Subject<boolean>();

    form = new FormGroup(
        {
            HTML: new FormControl(false),
            CSS: new FormControl(false),
            JavaScript: new FormControl(false),
            PHP: new FormControl(false),
            MySql: new FormControl(false),
        },
        requireAtLeastOneCheckBox()
    );

    constructor() {
        this.form.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(() => {
            if (this.form.valueChanges && this.form.valid) {
                this.languages.emit(this.form.value);
            }
        });
    }

    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.unsubscribe();
    }
}
