import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupPenaltyScheduleComponent } from './setup-penalty-schedule.component';

describe('SetupPenaltyScheduleComponent', () => {
  let component: SetupPenaltyScheduleComponent;
  let fixture: ComponentFixture<SetupPenaltyScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetupPenaltyScheduleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetupPenaltyScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
