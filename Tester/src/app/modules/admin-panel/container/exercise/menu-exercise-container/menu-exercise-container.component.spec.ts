import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuLessonsContainerComponent } from './menu-exercise-container.component';

describe('MenuLessonsContainerComponent', () => {
  let component: MenuLessonsContainerComponent;
  let fixture: ComponentFixture<MenuLessonsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuLessonsContainerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuLessonsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
