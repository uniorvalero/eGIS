import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupBankDialogComponent } from './setup-bank-dialog.component';

describe('SetupBankDialogComponent', () => {
  let component: SetupBankDialogComponent;
  let fixture: ComponentFixture<SetupBankDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetupBankDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetupBankDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
