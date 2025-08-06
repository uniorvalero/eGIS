import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCityDialogComponent } from './user-city-dialog.component';

describe('UserCityDialogComponent', () => {
  let component: UserCityDialogComponent;
  let fixture: ComponentFixture<UserCityDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserCityDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserCityDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
