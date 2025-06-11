import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RptasSubCodeComponent } from './rptas-sub-code.component';

describe('RptasSubCodeComponent', () => {
  let component: RptasSubCodeComponent;
  let fixture: ComponentFixture<RptasSubCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RptasSubCodeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RptasSubCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
