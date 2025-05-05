import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationretirementComponent } from './applicationretirement.component';

describe('ApplicationretirementComponent', () => {
  let component: ApplicationretirementComponent;
  let fixture: ComponentFixture<ApplicationretirementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApplicationretirementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicationretirementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
