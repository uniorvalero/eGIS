import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBarangayDialogComponent } from './user-barangay-dialog.component';

describe('UserBarangayDialogComponent', () => {
  let component: UserBarangayDialogComponent;
  let fixture: ComponentFixture<UserBarangayDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserBarangayDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserBarangayDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
