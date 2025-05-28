import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupExtensionDateComponent } from './setup-extension-date.component';

describe('SetupExtensionDateComponent', () => {
  let component: SetupExtensionDateComponent;
  let fixture: ComponentFixture<SetupExtensionDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetupExtensionDateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetupExtensionDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
