import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RptasUtilityComponent } from './rptas-utility.component';

describe('RptasUtilityComponent', () => {
  let component: RptasUtilityComponent;
  let fixture: ComponentFixture<RptasUtilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RptasUtilityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RptasUtilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
