import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterCodeDialogComponent } from './master-code-dialog.component';

describe('MasterCodeDialogComponent', () => {
  let component: MasterCodeDialogComponent;
  let fixture: ComponentFixture<MasterCodeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MasterCodeDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterCodeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
