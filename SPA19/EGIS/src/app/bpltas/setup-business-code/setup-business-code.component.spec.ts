import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupBusinessCodeComponent } from './setup-business-code.component';

describe('SetupBusinessCodeComponent', () => {
  let component: SetupBusinessCodeComponent;
  let fixture: ComponentFixture<SetupBusinessCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetupBusinessCodeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetupBusinessCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
