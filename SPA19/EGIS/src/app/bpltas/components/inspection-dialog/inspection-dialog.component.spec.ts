import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectionDialogComponent } from './inspection-dialog.component';

describe('InspectionDialogComponent', () => {
  let component: InspectionDialogComponent;
  let fixture: ComponentFixture<InspectionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InspectionDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InspectionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
