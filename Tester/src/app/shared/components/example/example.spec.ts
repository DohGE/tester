import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuExamplePresenterComponent } from './example';

describe('MenuExamplePresenterComponent', () => {
  let component: MenuExamplePresenterComponent;
  let fixture: ComponentFixture<MenuExamplePresenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuExamplePresenterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuExamplePresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
