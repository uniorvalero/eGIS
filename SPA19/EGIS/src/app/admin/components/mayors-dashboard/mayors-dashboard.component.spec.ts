import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MayorsDashboardComponent } from './mayors-dashboard.component';

describe('MayorsDashboardComponent', () => {
  let component: MayorsDashboardComponent;
  let fixture: ComponentFixture<MayorsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MayorsDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MayorsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
