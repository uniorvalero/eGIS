import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupCityOrdinanceCodeComponent } from './setup-city-ordinance-code.component';

describe('SetupCityOrdinanceCodeComponent', () => {
  let component: SetupCityOrdinanceCodeComponent;
  let fixture: ComponentFixture<SetupCityOrdinanceCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetupCityOrdinanceCodeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetupCityOrdinanceCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
