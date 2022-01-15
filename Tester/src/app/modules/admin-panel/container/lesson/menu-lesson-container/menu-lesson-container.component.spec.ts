import { ComponentFixture, TestBed } from "@angular/core/testing";

import { MenuLessonContainerComponent } from "./menu-lesson-container.component";

describe("MenuLessonContainerComponent", () => {
    let component: MenuLessonContainerComponent;
    let fixture: ComponentFixture<MenuLessonContainerComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MenuLessonContainerComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MenuLessonContainerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
