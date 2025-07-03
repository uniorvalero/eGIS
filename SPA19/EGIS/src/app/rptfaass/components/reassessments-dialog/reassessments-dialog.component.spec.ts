import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReassessmentsDialogComponent } from './reassessments-dialog.component';

describe('ReassessmentsDialogComponent', () => {
  let component: ReassessmentsDialogComponent;
  let fixture: ComponentFixture<ReassessmentsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReassessmentsDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReassessmentsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
