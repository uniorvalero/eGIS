import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailsStepComponent } from './user-details-step.component';

describe('UserDetailsStepComponent', () => {
  let component: UserDetailsStepComponent;
  let fixture: ComponentFixture<UserDetailsStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserDetailsStepComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDetailsStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
