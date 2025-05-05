import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenuecodechildDialogComponent } from './revenuecodechild-dialog.component';

describe('RevenuecodechildDialogComponent', () => {
  let component: RevenuecodechildDialogComponent;
  let fixture: ComponentFixture<RevenuecodechildDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RevenuecodechildDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevenuecodechildDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
