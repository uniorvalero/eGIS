import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RptasDashboarComponent } from './rptas-dashboar.component';

describe('RptasDashboarComponent', () => {
  let component: RptasDashboarComponent;
  let fixture: ComponentFixture<RptasDashboarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RptasDashboarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RptasDashboarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
