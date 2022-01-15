import { ComponentFixture, TestBed } from "@angular/core/testing";

import { LanguageSortingComponent } from "./language-sorting.component";

describe("LanguageSortingComponent", () => {
    let component: LanguageSortingComponent;
    let fixture: ComponentFixture<LanguageSortingComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [LanguageSortingComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(LanguageSortingComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
