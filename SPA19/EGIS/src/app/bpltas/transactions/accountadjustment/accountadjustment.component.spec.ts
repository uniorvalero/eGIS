import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountadjustmentComponent } from './accountadjustment.component';

describe('AccountadjustmentComponent', () => {
  let component: AccountadjustmentComponent;
  let fixture: ComponentFixture<AccountadjustmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountadjustmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountadjustmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
