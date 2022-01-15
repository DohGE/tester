import { FormControl } from '@angular/forms';
import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
} from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { SchoolClass } from '../../models/schoolClass.model';

@Component({
  selector: 'app-school-class-sorting-input',
  templateUrl: './school-class-sorting-input.component.html',
  styleUrls: ['./school-class-sorting-input.component.scss'],
})
export class SchoolClassSortingInputComponent implements OnDestroy {
  // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  @Output() onChange = new EventEmitter<string>();
  @Input() schoolClasses: SchoolClass[];

  select = new FormControl();
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor() {
    this.select.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe((name: string) => {
        this.onChange.emit(name);
      });
  }

  ngOnDestroy() {
    this.destroy$.next(false);
    this.destroy$.unsubscribe();
  }
}
