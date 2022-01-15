import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskStartContainerComponent } from './task-start-container.component';

describe('TaskStartContainerComponent', () => {
  let component: TaskStartContainerComponent;
  let fixture: ComponentFixture<TaskStartContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskStartContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskStartContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
