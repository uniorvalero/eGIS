import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEmailVerificationStepComponent } from './user-email-verification-step.component';

describe('UserEmailVerificationStepComponent', () => {
  let component: UserEmailVerificationStepComponent;
  let fixture: ComponentFixture<UserEmailVerificationStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserEmailVerificationStepComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserEmailVerificationStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
