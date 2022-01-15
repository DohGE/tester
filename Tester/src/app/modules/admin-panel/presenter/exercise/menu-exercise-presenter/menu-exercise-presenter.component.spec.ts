import { ComponentFixture, TestBed } from "@angular/core/testing";

import { MenuLessonsPresenterComponent } from "./menu-exercise-presenter.component";

describe("MenuLessonsPresenterComponent", () => {
    let component: MenuLessonsPresenterComponent;
    let fixture: ComponentFixture<MenuLessonsPresenterComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MenuLessonsPresenterComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MenuLessonsPresenterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
