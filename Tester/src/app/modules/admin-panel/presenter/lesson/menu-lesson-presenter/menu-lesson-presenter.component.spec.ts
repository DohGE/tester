import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuLessonPresenterComponent } from './menu-lesson-presenter.component';

describe('MenuLessonPresenterComponent', () => {
  let component: MenuLessonPresenterComponent;
  let fixture: ComponentFixture<MenuLessonPresenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuLessonPresenterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuLessonPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
