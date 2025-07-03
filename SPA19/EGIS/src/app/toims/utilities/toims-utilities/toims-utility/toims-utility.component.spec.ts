import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToimsUtilityComponent } from './toims-utility.component';

describe('ToimsUtilityComponent', () => {
  let component: ToimsUtilityComponent;
  let fixture: ComponentFixture<ToimsUtilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToimsUtilityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToimsUtilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
