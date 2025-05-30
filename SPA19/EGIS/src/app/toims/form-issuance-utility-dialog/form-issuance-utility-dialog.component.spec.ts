import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormIssuanceUtilityDialogComponent } from './form-issuance-utility-dialog.component';

describe('FormIssuanceUtilityDialogComponent', () => {
  let component: FormIssuanceUtilityDialogComponent;
  let fixture: ComponentFixture<FormIssuanceUtilityDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormIssuanceUtilityDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormIssuanceUtilityDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
