import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProvinceComponent } from './user-province.component';

describe('UserProvinceComponent', () => {
  let component: UserProvinceComponent;
  let fixture: ComponentFixture<UserProvinceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserProvinceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserProvinceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
