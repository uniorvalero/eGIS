import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RptasSubCodeDialogComponent } from './rptas-sub-code-dialog.component';

describe('RptasSubCodeDialogComponent', () => {
  let component: RptasSubCodeDialogComponent;
  let fixture: ComponentFixture<RptasSubCodeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RptasSubCodeDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RptasSubCodeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
