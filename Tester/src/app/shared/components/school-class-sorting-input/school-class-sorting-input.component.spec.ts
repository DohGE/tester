import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolClassSortingInputComponent } from './school-class-sorting-input.component';

describe('SchoolClassSortingInputComponent', () => {
  let component: SchoolClassSortingInputComponent;
  let fixture: ComponentFixture<SchoolClassSortingInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SchoolClassSortingInputComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolClassSortingInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
