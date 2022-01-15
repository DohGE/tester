import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { TaskMainContainerComponent } from './container/task-main-container/task-main-container.component';
import { TaskStartContainerComponent } from './container/task-start-container/task-start-container.component';

const routes: Routes = [
  {
    path: '',
    component: TaskMainContainerComponent,
  },
  {
    path: 'start',
    component: TaskStartContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaskRoutingModule {}
