import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBarangayComponent } from './user-barangay.component';

describe('UserBarangayComponent', () => {
  let component: UserBarangayComponent;
  let fixture: ComponentFixture<UserBarangayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserBarangayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserBarangayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
