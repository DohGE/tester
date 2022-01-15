import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserFacade } from 'src/app/modules/user/store/user.facade';
import { Lesson } from 'src/app/shared/models/lesson.model';
import { SchoolClass } from 'src/app/shared/models/schoolClass.model';
import { MenuFacade } from '../../../store/menu.facade';

@Component({
  selector: 'app-menu-lesson-container',
  templateUrl: './menu-lesson-container.component.html',
  styleUrls: ['./menu-lesson-container.component.scss'],
})
export class MenuLessonContainerComponent implements OnInit {
  lessons$: Observable<Lesson[]> = this.menuFacade.lessons$;

  schoolClasses: Observable<SchoolClass[]> = this.userFacade.schoolClasses$;

  constructor(private menuFacade: MenuFacade, private userFacade: UserFacade) {}

  ngOnInit(): void {
    this.menuFacade.loadLessons();
    this.userFacade.loadSchoolClasses();
  }

  onAddLessonToSchoolClass([lesson, schoolClass]: [Lesson, string]): void {
    this.userFacade.addLessonToSchoolUsers(lesson, schoolClass);
  }
}
