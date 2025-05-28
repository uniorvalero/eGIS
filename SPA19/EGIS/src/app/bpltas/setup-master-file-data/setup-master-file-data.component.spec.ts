import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupMasterFileDataComponent } from './setup-master-file-data.component';

describe('SetupMasterFileDataComponent', () => {
  let component: SetupMasterFileDataComponent;
  let fixture: ComponentFixture<SetupMasterFileDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetupMasterFileDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetupMasterFileDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
