import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficialreceipttransactionDetailsComponent } from './officialreceipttransaction-details.component';

describe('OfficialreceipttransactionDetailsComponent', () => {
  let component: OfficialreceipttransactionDetailsComponent;
  let fixture: ComponentFixture<OfficialreceipttransactionDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfficialreceipttransactionDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfficialreceipttransactionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
