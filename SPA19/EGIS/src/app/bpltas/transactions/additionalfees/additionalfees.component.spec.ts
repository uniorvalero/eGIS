import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalfeesComponent } from './additionalfees.component';

describe('AdditionalfeesComponent', () => {
  let component: AdditionalfeesComponent;
  let fixture: ComponentFixture<AdditionalfeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdditionalfeesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdditionalfeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
