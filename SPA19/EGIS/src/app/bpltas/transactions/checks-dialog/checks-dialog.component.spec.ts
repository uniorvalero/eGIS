import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecksDialogComponent } from './checks-dialog.component';

describe('ChecksDialogComponent', () => {
  let component: ChecksDialogComponent;
  let fixture: ComponentFixture<ChecksDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChecksDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChecksDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
