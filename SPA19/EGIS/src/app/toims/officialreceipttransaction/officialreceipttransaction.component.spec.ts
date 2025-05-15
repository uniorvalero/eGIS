import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficialreceipttransactionComponent } from './officialreceipttransaction.component';

describe('OfficialreceipttransactionComponent', () => {
  let component: OfficialreceipttransactionComponent;
  let fixture: ComponentFixture<OfficialreceipttransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfficialreceipttransactionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfficialreceipttransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
