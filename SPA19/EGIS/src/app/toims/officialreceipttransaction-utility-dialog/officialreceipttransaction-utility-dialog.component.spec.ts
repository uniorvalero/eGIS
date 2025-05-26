import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficialreceipttransactionUtilityDialogComponent } from './officialreceipttransaction-utility-dialog.component';

describe('OfficialreceipttransactionUtilityDialogComponent', () => {
  let component: OfficialreceipttransactionUtilityDialogComponent;
  let fixture: ComponentFixture<OfficialreceipttransactionUtilityDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfficialreceipttransactionUtilityDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfficialreceipttransactionUtilityDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
