import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Exercise } from 'src/app/shared/models/exercise.model';
import { Lesson } from 'src/app/shared/models/lesson.model';
import { SchoolClass } from 'src/app/shared/models/schoolClass.model';

@Component({
  selector: 'app-menu-lesson-presenter',
  templateUrl: './menu-lesson-presenter.component.html',
  styleUrls: ['./menu-lesson-presenter.component.scss'],
})
export class MenuLessonPresenterComponent {
  @Output() addLessonToSchoolClass = new EventEmitter<[Lesson, string]>();
  @Input() lessons: Lesson[];
  @Input() schoolClasses: SchoolClass[];
  lessonsFilteredCollection: MatTableDataSource<Lesson | Exercise>;

  displayedColumns: string[] = ['name', 'date'];
  info = false;
  schoolClass = false;
  lessonInfo: Lesson;
  temporaryLesson: Lesson;

  sortingValue: string;
  ngOnChange() {
    console.log(this.lessons);
  }

  onInfo(lesson: Lesson): void {
    this.info = true;
    this.lessonInfo = lesson;
  }

  onAddLessonToSchoolClass(): void {
    this.addLessonToSchoolClass.emit([this.temporaryLesson, this.sortingValue]);
  }

  onSchoolClass(lesson: Lesson): void {
    this.schoolClass = true;
    this.temporaryLesson = lesson;
  }

  onBack(): void {
    this.schoolClass = false;
    this.temporaryLesson = <Lesson>{};
    this.sortingValue = '';
  }
}
