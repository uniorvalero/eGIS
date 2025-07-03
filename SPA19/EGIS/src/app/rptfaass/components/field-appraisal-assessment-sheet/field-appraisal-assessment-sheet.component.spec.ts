import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldAppraisalAssessmentSheetComponent } from './field-appraisal-assessment-sheet.component';

describe('FieldAppraisalAssessmentSheetComponent', () => {
  let component: FieldAppraisalAssessmentSheetComponent;
  let fixture: ComponentFixture<FieldAppraisalAssessmentSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FieldAppraisalAssessmentSheetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FieldAppraisalAssessmentSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
