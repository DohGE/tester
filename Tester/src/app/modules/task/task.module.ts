import { NgModule } from "@angular/core";
import { SharedModule } from "../../shared/shared.module";
import { TaskRoutingModule } from "./task-routing.module";
import { TaskMainContainerComponent } from "./container/task-main-container/task-main-container.component";
import { TaskMainPresenterComponent } from "./presenter/task-main-presenter/task-main-presenter.component";
import { TaskStartContainerComponent } from './container/task-start-container/task-start-container.component';
import { TaskStartPresenterComponent } from './presenter/task-start-presenter/task-start-presenter.component';

@NgModule({
    declarations: [TaskMainContainerComponent, TaskMainPresenterComponent, TaskStartContainerComponent, TaskStartPresenterComponent],
    imports: [TaskRoutingModule, SharedModule],
})
export class TaskModule {}
