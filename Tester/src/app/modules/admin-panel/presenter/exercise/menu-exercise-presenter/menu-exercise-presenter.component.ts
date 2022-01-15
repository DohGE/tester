import { Component, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Exercise } from '../../../../../shared/models/exercise.model';

@Component({
  selector: 'app-menu-exercise-presenter',
  templateUrl: './menu-exercise-presenter.component.html',
  styleUrls: ['./menu-exercise-presenter.component.scss'],
})
export class MenuExercisePresenterComponent {
  @Input() exercises: Exercise[];
  exercisesFilteredCollection: MatTableDataSource<Exercise>;
}
