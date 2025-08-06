import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAppDialogComponent } from './user-app-dialog.component';

describe('UserAppDialogComponent', () => {
  let component: UserAppDialogComponent;
  let fixture: ComponentFixture<UserAppDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserAppDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserAppDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
