import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { MenuRoutingModule } from './menu-routing.module';
import { MenuMainContainerComponent } from './container/menu-main-container/menu-main-container.component';
import { MenuMainPresenterComponent } from './presenter/menu-main-presenter/menu-main-presenter.component';
import { MenuAddUsersContainerComponent } from './container/users/menu-add-users-container/menu-add-users-container.component';
import { MenuAddUsersPresenterComponent } from './presenter/users/menu-add-users-presenter/menu-add-users-presenter.component';
import { MenuAddExercisePresenterComponent } from './presenter/exercise/menu-add-exercise-presenter/menu-add-exercise-presenter.component';
import { MenuAddExerciseContainerComponent } from './container/exercise/menu-add-exercise-container/menu-add-exercise-container.component';
import { MenuExerciseContainerComponent } from './container/exercise/menu-exercise-container/menu-exercise-container.component';
import { MenuExercisePresenterComponent } from './presenter/exercise/menu-exercise-presenter/menu-exercise-presenter.component';
import { MenuAddLessonContainerComponent } from './container/lesson/menu-add-lesson-container/menu-add-lesson-container.component';
import { MenuLessonContainerComponent } from './container/lesson/menu-lesson-container/menu-lesson-container.component';
import { MenuAddLessonPresenterComponent } from './presenter/lesson/menu-add-lesson-presenter/menu-add-lesson-presenter.component';
import { MenuLessonPresenterComponent } from './presenter/lesson/menu-lesson-presenter/menu-lesson-presenter.component';

import { NgxCsvParserModule } from 'ngx-csv-parser';
import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
import { MenuUsersContainerComponent } from './container/users/menu-users-container/menu-users-container.component';
import { MenuUsersPresenterComponent } from './presenter/users/menu-users-presenter/menu-users-presenter.component';

@NgModule({
  declarations: [
    MenuMainContainerComponent,
    MenuMainPresenterComponent,
    MenuAddUsersPresenterComponent,
    MenuAddUsersContainerComponent,
    MenuAddExercisePresenterComponent,
    MenuAddExerciseContainerComponent,
    MenuExerciseContainerComponent,
    MenuExercisePresenterComponent,
    MenuLessonPresenterComponent,
    MenuAddLessonPresenterComponent,
    MenuAddLessonContainerComponent,
    MenuLessonContainerComponent,
    MenuUsersContainerComponent,
    MenuUsersPresenterComponent,
  ],
  imports: [MenuRoutingModule, SharedModule, NgxCsvParserModule, EditorModule],
  providers: [
    { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' },
  ],
})
export class MenuModule {}
