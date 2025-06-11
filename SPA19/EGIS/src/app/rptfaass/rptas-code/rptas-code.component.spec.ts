import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RptasCodeComponent } from './rptas-code.component';

describe('RptasCodeComponent', () => {
  let component: RptasCodeComponent;
  let fixture: ComponentFixture<RptasCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RptasCodeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RptasCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
