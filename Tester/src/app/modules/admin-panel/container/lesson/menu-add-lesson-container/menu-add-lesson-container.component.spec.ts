import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuAddLessonContainerComponent } from './menu-add-lesson-container.component';

describe('MenuAddLessonContainerComponent', () => {
  let component: MenuAddLessonContainerComponent;
  let fixture: ComponentFixture<MenuAddLessonContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuAddLessonContainerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuAddLessonContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
