import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-add-lesson-to-school-class',
  templateUrl: './add-lesson-to-school-class.component.html',
  styleUrls: ['./add-lesson-to-school-class.component.scss'],
})
export class AddLessonToSchoolClassComponent {
  @Output() back = new EventEmitter<void>();
  @Output() addToSchoolClass = new EventEmitter<void>();
  @Input() sortingValue: string;

  onBack(): void {
    this.back.emit();
  }

  onAddToSchoolClass(): void {
    if (this.sortingValue) {
      this.addToSchoolClass.emit();
    }
  }
}
