import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAddressStepComponent } from './user-address-step.component';

describe('UserAddressStepComponent', () => {
  let component: UserAddressStepComponent;
  let fixture: ComponentFixture<UserAddressStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserAddressStepComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserAddressStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
