import { ComponentFixture, TestBed } from "@angular/core/testing";

import { AddLessonToSchoolClassComponent } from "./add-lesson-to-school-class.component";

describe("AddLessonToSchoolClassComponent", () => {
    let component: AddLessonToSchoolClassComponent;
    let fixture: ComponentFixture<AddLessonToSchoolClassComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AddLessonToSchoolClassComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AddLessonToSchoolClassComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
