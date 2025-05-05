import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TellerDialogComponent } from './teller-dialog.component';

describe('TellerDialogComponent', () => {
  let component: TellerDialogComponent;
  let fixture: ComponentFixture<TellerDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TellerDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TellerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
