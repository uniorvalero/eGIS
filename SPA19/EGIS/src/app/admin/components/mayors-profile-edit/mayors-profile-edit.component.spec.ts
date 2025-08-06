import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MayorsProfileEditComponent } from './mayors-profile-edit.component';

describe('MayorsProfileEditComponent', () => {
  let component: MayorsProfileEditComponent;
  let fixture: ComponentFixture<MayorsProfileEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MayorsProfileEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MayorsProfileEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
