import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeMenuContainerComponent } from './container/home-menu-container/home-menu-container.component';

const routes: Routes = [
  {
    path: '',
    component: HomeMenuContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
