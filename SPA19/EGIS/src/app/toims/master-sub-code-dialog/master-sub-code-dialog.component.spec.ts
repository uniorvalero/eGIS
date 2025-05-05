import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterSubCodeDialogComponent } from './master-sub-code-dialog.component';

describe('MasterSubCodeDialogComponent', () => {
  let component: MasterSubCodeDialogComponent;
  let fixture: ComponentFixture<MasterSubCodeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MasterSubCodeDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterSubCodeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
