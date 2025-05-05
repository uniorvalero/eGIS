import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterSubcodeComponent } from './master-subcode.component';

describe('MasterSubcodeComponent', () => {
  let component: MasterSubcodeComponent;
  let fixture: ComponentFixture<MasterSubcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MasterSubcodeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterSubcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
