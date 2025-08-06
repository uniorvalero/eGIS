import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPermissionWizardComponent } from './user-permission-wizard.component';

describe('UserPermissionWizardComponent', () => {
  let component: UserPermissionWizardComponent;
  let fixture: ComponentFixture<UserPermissionWizardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserPermissionWizardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserPermissionWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
