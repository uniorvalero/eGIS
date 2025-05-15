import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficialreceipttransactionDialogComponent } from './officialreceipttransaction-dialog.component';

describe('OfficialreceipttransactionDialogComponent', () => {
  let component: OfficialreceipttransactionDialogComponent;
  let fixture: ComponentFixture<OfficialreceipttransactionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfficialreceipttransactionDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfficialreceipttransactionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
