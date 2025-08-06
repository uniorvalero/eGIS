import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAssetWizardComponent } from './user-asset-wizard.component';

describe('UserAssetWizardComponent', () => {
  let component: UserAssetWizardComponent;
  let fixture: ComponentFixture<UserAssetWizardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserAssetWizardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserAssetWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
