import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficialreceipttransactionCalendarDialogComponent } from './officialreceipttransaction-calendar-dialog.component';

describe('OfficialreceipttransactionCalendarDialogComponent', () => {
  let component: OfficialreceipttransactionCalendarDialogComponent;
  let fixture: ComponentFixture<OfficialreceipttransactionCalendarDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfficialreceipttransactionCalendarDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfficialreceipttransactionCalendarDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
