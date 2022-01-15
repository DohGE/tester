import { ComponentFixture, TestBed } from "@angular/core/testing";

import { MenuAddExercisePresenterComponent } from "./menu-add-exercise-presenter.component";

describe("MenuLessonsPresenterComponent", () => {
    let component: MenuAddExercisePresenterComponent;
    let fixture: ComponentFixture<MenuAddExercisePresenterComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MenuAddExercisePresenterComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MenuAddExercisePresenterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
