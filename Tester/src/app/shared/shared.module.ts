import { NgModule } from "@angular/core";
import { CommonModule, DecimalPipe } from "@angular/common";
import { AngularMaterialsModule } from "./angular-materials.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ExampleComponent } from "./components/example/example";
import { ExerciseTableComponent } from "./components/exercise-table/exercise-table.component";
import { ExerciseInfoComponent } from "./components/exercise-info/exercise-info.component";
import { LanguageSortingComponent } from "./components/language-sorting/language-sorting.component";
import { AddLanguageComponent } from "./components/add-language/add-language.component";
import { SortingPipe } from "./pipes/sorting.pipe";
import { LessonInfoComponent } from "./components/lesson-info/lesson-info.component";
import { SchoolClassSortingInputComponent } from "./components/school-class-sorting-input/school-class-sorting-input.component";
import { AddLessonToSchoolClassComponent } from "./components/add-lesson-to-school-class/add-lesson-to-school-class.component";
@NgModule({
    declarations: [
        ExampleComponent,
        ExerciseTableComponent,
        ExerciseInfoComponent,
        AddLanguageComponent,
        LanguageSortingComponent,
        LessonInfoComponent,
        SchoolClassSortingInputComponent,
        AddLessonToSchoolClassComponent,
        SortingPipe,
    ],
    imports: [
        CommonModule,
        AngularMaterialsModule,
        ReactiveFormsModule,
        FormsModule,
    ],
    exports: [
        CommonModule,
        AngularMaterialsModule,
        ReactiveFormsModule,
        FormsModule,
        ExampleComponent,
        ExerciseTableComponent,
        ExerciseInfoComponent,
        AddLanguageComponent,
        LanguageSortingComponent,
        LessonInfoComponent,
        SchoolClassSortingInputComponent,
        AddLessonToSchoolClassComponent,
        SortingPipe,
    ],
    providers: [DecimalPipe],
})
export class SharedModule {}
