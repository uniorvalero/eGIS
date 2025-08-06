import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProvinceDialogComponent } from './user-province-dialog.component';

describe('UserProvinceDialogComponent', () => {
  let component: UserProvinceDialogComponent;
  let fixture: ComponentFixture<UserProvinceDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserProvinceDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserProvinceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
