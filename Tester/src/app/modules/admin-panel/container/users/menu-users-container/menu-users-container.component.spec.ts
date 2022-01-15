import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuUsersContainerComponent } from './menu-users-container.component';

describe('MenuUsersContainerComponent', () => {
  let component: MenuUsersContainerComponent;
  let fixture: ComponentFixture<MenuUsersContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuUsersContainerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuUsersContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
