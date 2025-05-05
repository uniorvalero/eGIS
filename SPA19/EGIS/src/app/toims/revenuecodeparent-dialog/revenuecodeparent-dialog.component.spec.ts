import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenuecodeparentDialogComponent } from './revenuecodeparent-dialog.component';

describe('RevenuecodeparentDialogComponent', () => {
  let component: RevenuecodeparentDialogComponent;
  let fixture: ComponentFixture<RevenuecodeparentDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RevenuecodeparentDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevenuecodeparentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
