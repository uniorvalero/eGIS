import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimatedrevenueComponent } from './estimatedrevenue.component';

describe('EstimatedrevenueComponent', () => {
  let component: EstimatedrevenueComponent;
  let fixture: ComponentFixture<EstimatedrevenueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstimatedrevenueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstimatedrevenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
