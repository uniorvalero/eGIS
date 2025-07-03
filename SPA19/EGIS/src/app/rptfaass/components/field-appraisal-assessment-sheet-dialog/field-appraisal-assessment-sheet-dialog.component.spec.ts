import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldAppraisalAssessmentSheetDialogComponent } from './field-appraisal-assessment-sheet-dialog.component';

describe('FieldAppraisalAssessmentSheetDialogComponent', () => {
  let component: FieldAppraisalAssessmentSheetDialogComponent;
  let fixture: ComponentFixture<FieldAppraisalAssessmentSheetDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FieldAppraisalAssessmentSheetDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FieldAppraisalAssessmentSheetDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
