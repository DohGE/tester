import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuAddLessonPresenterComponent } from './menu-add-lesson-presenter.component';

describe('MenuAddLessonPresenterComponent', () => {
  let component: MenuAddLessonPresenterComponent;
  let fixture: ComponentFixture<MenuAddLessonPresenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuAddLessonPresenterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuAddLessonPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
