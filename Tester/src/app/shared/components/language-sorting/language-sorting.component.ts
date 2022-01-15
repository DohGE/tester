import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Exercise } from '../../models/exercise.model';
import { Language } from '../../models/language.model';
import { Lesson } from '../../models/lesson.model';
import { IsAllObjectFalse } from '../../services/isAllObjectFalse.service';

@Component({
  selector: 'app-language-sorting',
  templateUrl: './language-sorting.component.html',
  styleUrls: ['./language-sorting.component.scss'],
})
export class LanguageSortingComponent implements OnDestroy {
  @Output() sortedData = new EventEmitter<
    MatTableDataSource<Exercise | Lesson>
  >();
  @Input() public set exercises(exercises: Exercise[] | Lesson[]) {
    this._exercises = exercises;
    this.sortedData.emit(new MatTableDataSource(exercises));
  }
  private _exercises: Exercise[] | Lesson[];
  // eslint-disable-next-line @typescript-eslint/adjacent-overload-signatures
  public get exercises(): Exercise[] | Lesson[] {
    return this._exercises;
  }

  destroy$: Subject<boolean> = new Subject<boolean>();
  names = ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySql'];

  form: FormGroup = new FormGroup({
    HTML: new FormControl(null),
    CSS: new FormControl(null),
    JavaScript: new FormControl(null),
    PHP: new FormControl(null),
    MySql: new FormControl(null),
  });
  constructor(private isAllObjectFalse: IsAllObjectFalse) {
    this.form.patchValue({
      HTML: false,
      CSS: false,
      JavaScript: false,
      PHP: false,
      MySql: false,
    });
    this.form.valueChanges.pipe(takeUntil(this.destroy$)).subscribe((data) => {
      let exercisesFilteredCollection: MatTableDataSource<Exercise | Lesson>;
      exercisesFilteredCollection = new MatTableDataSource([]);
      const lang = <Language>{};
      Object.entries(data).forEach(([key, value]) => {
        if (value) {
          lang[key] = value;
        }
      });
      this.exercises.forEach((exercise) => {
        let temporary = 0;
        Object.keys(exercise.language).find((k) => {
          if (exercise.language[k] && lang[k]) {
            temporary++;
          }
        });
        if (temporary == Object.getOwnPropertyNames(lang).length) {
          exercisesFilteredCollection.data.push(exercise);
        }
      });
      if (this.isAllObjectFalse.isAllObjectFalse(this.form.value)) {
        exercisesFilteredCollection.data = this.exercises;
      }
      this.sortedData.emit(exercisesFilteredCollection);
    });
  }

  ngOnDestroy() {
    this.destroy$.next(false);
    this.destroy$.unsubscribe();
  }
}
