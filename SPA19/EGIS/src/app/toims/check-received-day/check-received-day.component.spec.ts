import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckReceivedDayComponent } from './check-received-day.component';

describe('CheckReceivedDayComponent', () => {
  let component: CheckReceivedDayComponent;
  let fixture: ComponentFixture<CheckReceivedDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckReceivedDayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckReceivedDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
