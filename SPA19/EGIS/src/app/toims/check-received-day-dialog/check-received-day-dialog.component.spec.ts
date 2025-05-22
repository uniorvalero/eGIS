import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckReceivedDayDialogComponent } from './check-received-day-dialog.component';

describe('CheckReceivedDayDialogComponent', () => {
  let component: CheckReceivedDayDialogComponent;
  let fixture: ComponentFixture<CheckReceivedDayDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckReceivedDayDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckReceivedDayDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
