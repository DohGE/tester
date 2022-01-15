import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuFacade } from 'src/app/modules/admin-panel/store/menu.facade';
import { UserFacade } from 'src/app/modules/user/store/user.facade';
import { LessonToDo } from 'src/app/shared/models/lessonToDo.model';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-task-main-container',
  templateUrl: './task-main-container.component.html',
  styleUrls: ['./task-main-container.component.scss'],
})
export class TaskMainContainerComponent implements OnInit {
  user$: Observable<User> = this.userFacade.user$;

  constructor(private userFacade: UserFacade, private menuFacade: MenuFacade) {}

  ngOnInit(): void {
    this.userFacade.loadUser();
  }

  onStartLesson(activeLesson: LessonToDo): void {
    this.menuFacade.getActiveLesson(activeLesson);
  }
}
