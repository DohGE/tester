import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CodeEditorMainContainerComponent } from './container/code-editor-main-container/code-editor-main-container.component';

const routes: Routes = [
  {
    path: '',
    component: CodeEditorMainContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CodeEditorRoutingModule {}
