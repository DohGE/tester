import { User } from '../../../../../shared/models/user.model';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-menu-add-users-presenter',
  templateUrl: './menu-add-users-presenter.component.html',
  styleUrls: ['./menu-add-users-presenter.component.scss'],
})
export class MenuAddUsersPresenterComponent {
  @Output() addData = new EventEmitter<[string, File[]]>();
  @Output() download = new EventEmitter<void>();
  @Input() newUsers: User[];

  form: FormGroup = new FormGroup({
    schoolClass: new FormControl(null, [Validators.required]),
    file: new FormControl(null, [Validators.required]),
  });
  error = false;
  file: File[];

  displayedColumns: string[] = [
    'name',
    'surename',
    'login',
    'password',
    'schoolClass',
  ];

  onChange(event): void {
    this.file = event.srcElement.files;
  }

  onAdd(): void {
    this.error = true;
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.addData.emit([this.form.controls.schoolClass.value, this.file]);
      this.error = false;
      this.form.reset();
    }
  }

  onDownload(): void {
    this.download.emit();
  }
}
