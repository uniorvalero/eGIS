import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormIssuanceDialogComponent } from './form-issuance-dialog.component';

describe('FormIssuanceDialogComponent', () => {
  let component: FormIssuanceDialogComponent;
  let fixture: ComponentFixture<FormIssuanceDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormIssuanceDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormIssuanceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
