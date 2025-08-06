import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MayorsPersonalInfoComponent } from './mayors-personal-info.component';

describe('MayorsPersonalInfoComponent', () => {
  let component: MayorsPersonalInfoComponent;
  let fixture: ComponentFixture<MayorsPersonalInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MayorsPersonalInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MayorsPersonalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
