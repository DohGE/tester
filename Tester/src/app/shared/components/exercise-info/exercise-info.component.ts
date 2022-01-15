import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { Exercise } from '../../models/exercise.model';

@Component({
  selector: 'app-exercise-info',
  templateUrl: './exercise-info.component.html',
  styleUrls: ['./exercise-info.component.scss'],
})
export class ExerciseInfoComponent {
  @Output() back = new EventEmitter<void>();
  @Input() solution: boolean;
  @Input() public set exerciseInfo(exercise: Exercise) {
    this._exerciseInfo = exercise;
    Object.keys(exercise.language).forEach((key) => {
      this.language.push(key);
    });
  }
  public get exerciseInfo(): Exercise {
    return this._exerciseInfo;
  }
  private _exerciseInfo: Exercise;

  language = [];

  @HostListener('click')
  onBack(): void {
    this.back.emit();
  }
}
