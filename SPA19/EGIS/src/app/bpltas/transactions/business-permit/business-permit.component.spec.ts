import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessPermitComponent } from './business-permit.component';

describe('BusinessPermitComponent', () => {
  let component: BusinessPermitComponent;
  let fixture: ComponentFixture<BusinessPermitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinessPermitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessPermitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
