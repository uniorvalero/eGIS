import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormIssuanceSetupDialogComponent } from './form-issuance-setup-dialog.component';

describe('FormIssuanceSetupDialogComponent', () => {
  let component: FormIssuanceSetupDialogComponent;
  let fixture: ComponentFixture<FormIssuanceSetupDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormIssuanceSetupDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormIssuanceSetupDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
