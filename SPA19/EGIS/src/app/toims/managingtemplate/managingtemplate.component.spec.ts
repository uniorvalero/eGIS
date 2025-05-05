import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagingtemplateComponent } from './managingtemplate.component';

describe('ManagingtemplateComponent', () => {
  let component: ManagingtemplateComponent;
  let fixture: ComponentFixture<ManagingtemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagingtemplateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagingtemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
