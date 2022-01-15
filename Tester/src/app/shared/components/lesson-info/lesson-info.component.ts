import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Exercise } from '../../models/exercise.model';
import { Lesson } from '../../models/lesson.model';

@Component({
  selector: 'app-lesson-info',
  templateUrl: './lesson-info.component.html',
  styleUrls: ['./lesson-info.component.scss'],
})
export class LessonInfoComponent {
  @Output() back = new EventEmitter<void>();
  @Input() public set lessonInfo(lesson: Lesson) {
    this._lessonInfo = lesson;
    Object.keys(lesson.language).forEach((key) => {
      this.language.push(key);
    });
    this.exercises = new MatTableDataSource(lesson.exercises);
  }
  public get lessonInfo(): Lesson {
    return this._lessonInfo;
  }
  private _lessonInfo: Lesson;

  exercises: MatTableDataSource<Exercise>;
  language = [];

  onBack(): void {
    this.back.emit();
  }
}
