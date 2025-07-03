import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RptasDialogUtilityComponent } from './rptas-dialog-utility.component';

describe('RptasDialogUtilityComponent', () => {
  let component: RptasDialogUtilityComponent;
  let fixture: ComponentFixture<RptasDialogUtilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RptasDialogUtilityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RptasDialogUtilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
