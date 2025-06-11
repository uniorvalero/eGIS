import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualUseDialogComponent } from './actual-use-dialog.component';

describe('ActualUseDialogComponent', () => {
  let component: ActualUseDialogComponent;
  let fixture: ComponentFixture<ActualUseDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActualUseDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualUseDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
