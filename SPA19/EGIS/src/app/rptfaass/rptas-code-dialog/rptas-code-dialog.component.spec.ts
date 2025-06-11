import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RptasCodeDialogComponent } from './rptas-code-dialog.component';

describe('RptasCodeDialogComponent', () => {
  let component: RptasCodeDialogComponent;
  let fixture: ComponentFixture<RptasCodeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RptasCodeDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RptasCodeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
