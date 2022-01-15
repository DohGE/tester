import { ComponentFixture, TestBed } from "@angular/core/testing";

import { MenuAddUsersContainerComponent } from "./menu-add-users-container.component";

describe("MenuAddUsersContainerComponent", () => {
    let component: MenuAddUsersContainerComponent;
    let fixture: ComponentFixture<MenuAddUsersContainerComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MenuAddUsersContainerComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MenuAddUsersContainerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
