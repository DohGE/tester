import { ComponentFixture, TestBed } from "@angular/core/testing";

import { MenuUsersPresenterComponent } from "./menu-users-presenter.component";

describe("MenuUsersPresenterComponent", () => {
    let component: MenuUsersPresenterComponent;
    let fixture: ComponentFixture<MenuUsersPresenterComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MenuUsersPresenterComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MenuUsersPresenterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
