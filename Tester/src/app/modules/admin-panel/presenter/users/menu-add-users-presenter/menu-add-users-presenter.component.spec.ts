import { ComponentFixture, TestBed } from "@angular/core/testing";

import { MenuAddUsersPresenterComponent } from "./menu-add-users-presenter.component";

describe("MenuAddUsersPresenterComponent", () => {
    let component: MenuAddUsersPresenterComponent;
    let fixture: ComponentFixture<MenuAddUsersPresenterComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MenuAddUsersPresenterComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MenuAddUsersPresenterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
