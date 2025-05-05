import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoldaccountComponent } from './holdaccount.component';

describe('HoldaccountComponent', () => {
  let component: HoldaccountComponent;
  let fixture: ComponentFixture<HoldaccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HoldaccountComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoldaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
