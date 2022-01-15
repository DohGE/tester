import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeMenuContainerComponent } from './container/home-menu-container/home-menu-container.component';
import { HomeMenuPresenterComponent } from './presenter/home-menu-presenter/home-menu-presenter.component';

@NgModule({
  declarations: [HomeMenuContainerComponent, HomeMenuPresenterComponent],
  imports: [HomeRoutingModule, SharedModule],
})
export class HomeModule {}
