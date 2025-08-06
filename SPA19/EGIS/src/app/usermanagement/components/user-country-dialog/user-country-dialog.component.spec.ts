import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCountryDialogComponent } from './user-country-dialog.component';

describe('UserCountryDialogComponent', () => {
  let component: UserCountryDialogComponent;
  let fixture: ComponentFixture<UserCountryDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserCountryDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserCountryDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
