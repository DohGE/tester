import { Language } from "./../../../../../shared/models/language.model";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Exercise } from "../../../../../shared/models/exercise.model";

import "tinymce";
import { FormControl, Validators } from "@angular/forms";
import { MatTableDataSource } from "@angular/material/table";
declare let tinymce: any;
@Component({
    selector: "app-menu-add-lesson-presenter",
    templateUrl: "./menu-add-lesson-presenter.component.html",
    styleUrls: ["./menu-add-lesson-presenter.component.scss"],
})
export class MenuAddLessonPresenterComponent {
    @Output() addLesson = new EventEmitter<[string, string, Language]>();
    @Output() addExercise = new EventEmitter<Exercise>();
    @Input() exercises: Exercise[];
    exercisesFilteredCollection: MatTableDataSource<Exercise> =
        new MatTableDataSource<Exercise>([]);

    name = new FormControl(null, Validators.required);
    nameValue: string;

    language: Language;
    info = false;

    addExerciseBoolean = false;
    example = false;
    exampleSrc = "";
    exampleAlt = "";
    error = false;
    clear = false;

    initialValue = "Zacznij edytować by zobaczyć magię!";
    useDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    init = {
        plugins:
            "print preview paste importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor  insertdatetime advlist lists wordcount textpattern noneditable help charmap quickbars emoticons",
        imagetools_cors_hosts: ["picsum.photos"],
        menubar: "file edit view insert format tools table help",
        toolbar:
            "undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl",
        toolbar_sticky: true,
        autosave_ask_before_unload: true,
        autosave_interval: "30s",
        autosave_prefix: "{path}{query}-{id}-",
        autosave_restore_when_empty: false,
        autosave_retention: "2m",
        image_advtab: true,
        importcss_append: true,
        width: "100%",
        height: "100%",
        template_cdate_format: "[Date Created (CDATE): %m/%d/%Y : %H:%M:%S]",
        template_mdate_format: "[Date Modified (MDATE): %m/%d/%Y : %H:%M:%S]",
        image_caption: true,
        quickbars_selection_toolbar:
            "bold italic | quicklink h2 h3 blockquote quickimage quicktable",
        noneditable_noneditable_class: "mceNonEditable",
        toolbar_mode: "sliding",
        contextmenu: "link image imagetools table",
        skin: this.useDarkMode ? "oxide-dark" : "oxide",
        content_css: this.useDarkMode ? "dark" : "default",
        content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        outputFormat: "html",
    };

    onAddLesson(): void {
        this.error = true;
        this.name.markAsTouched();
        if (this.nameValue && this.language) {
            const editorValue = tinymce
                .get("editor")
                .getContent({ format: "html" });
            this.addLesson.emit([editorValue, this.name.value, this.language]);
            this.language = {};
            this.clear = true;
            this.error = false;
            this.name.markAsUntouched();
        } else {
            this.info = true;
        }
    }

    onBack(): void {
        this.nameValue = this.name.value;
        this.name.reset();
        this.info = false;
    }

    onAddExercise(exercise: Exercise): void {
        this.addExercise.emit(exercise);
    }
}
