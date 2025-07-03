import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaranggaysDialogComponent } from './baranggays-dialog.component';

describe('BaranggaysDialogComponent', () => {
  let component: BaranggaysDialogComponent;
  let fixture: ComponentFixture<BaranggaysDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaranggaysDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaranggaysDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
