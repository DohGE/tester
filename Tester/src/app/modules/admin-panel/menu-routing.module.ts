import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { MenuMainContainerComponent } from "./container/menu-main-container/menu-main-container.component";
import { MenuAddUsersContainerComponent } from "./container/users/menu-add-users-container/menu-add-users-container.component";
import { MenuAddExerciseContainerComponent } from "./container/exercise/menu-add-exercise-container/menu-add-exercise-container.component";
import { MenuExerciseContainerComponent } from "./container/exercise/menu-exercise-container/menu-exercise-container.component";
import { MenuAddLessonContainerComponent } from "./container/lesson/menu-add-lesson-container/menu-add-lesson-container.component";
import { MenuLessonContainerComponent } from "./container/lesson/menu-lesson-container/menu-lesson-container.component";
import { MenuUsersContainerComponent } from "./container/users/menu-users-container/menu-users-container.component";

const routes: Routes = [
    {
        path: "",
        component: MenuMainContainerComponent,
        children: [
            {
                path: "",
                component: MenuLessonContainerComponent,
            },
            {
                path: "addLessons",
                component: MenuAddLessonContainerComponent,
            },
            {
                path: "exercises",
                component: MenuExerciseContainerComponent,
            },
            {
                path: "addExercises",
                component: MenuAddExerciseContainerComponent,
            },
            {
                path: "users",
                component: MenuUsersContainerComponent,
            },
            {
                path: "addUsers",
                component: MenuAddUsersContainerComponent,
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class MenuRoutingModule {}
