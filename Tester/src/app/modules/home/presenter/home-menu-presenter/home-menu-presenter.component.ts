import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-home-menu-presenter',
  templateUrl: './home-menu-presenter.component.html',
  styleUrls: ['./home-menu-presenter.component.scss'],
})
export class HomeMenuPresenterComponent {
  @Output() logout = new EventEmitter<void>();

  onLogout(): void {
    this.logout.emit();
  }
}
