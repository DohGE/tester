import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskStartPresenterComponent } from './task-start-presenter.component';

describe('TaskStartPresenterComponent', () => {
  let component: TaskStartPresenterComponent;
  let fixture: ComponentFixture<TaskStartPresenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskStartPresenterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskStartPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
