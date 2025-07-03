import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardUtilityComponent } from './dashboard-utility.component';

describe('DashboardUtilityComponent', () => {
  let component: DashboardUtilityComponent;
  let fixture: ComponentFixture<DashboardUtilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardUtilityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardUtilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
