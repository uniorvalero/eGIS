import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormIssuanceComponent } from './form-issuance.component';

describe('FormIssuanceComponent', () => {
  let component: FormIssuanceComponent;
  let fixture: ComponentFixture<FormIssuanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormIssuanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormIssuanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
