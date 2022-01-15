import { MenuFacade } from '../../../store/menu.facade';
import { Component } from '@angular/core';
import { Exercise } from '../../../../../shared/models/exercise.model';

@Component({
  selector: 'app-menu-add-exercise-container',
  templateUrl: './menu-add-exercise-container.component.html',
  styleUrls: ['./menu-add-exercise-container.component.scss'],
})
export class MenuAddExerciseContainerComponent {
  constructor(private menuFacade: MenuFacade) {}

  onSave(exercise: Exercise): void {
    this.menuFacade.saveExercise(exercise);
  }
}
