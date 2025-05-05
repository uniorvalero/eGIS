import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenuecodechildComponent } from './revenuecodechild.component';

describe('RevenuecodechildComponent', () => {
  let component: RevenuecodechildComponent;
  let fixture: ComponentFixture<RevenuecodechildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RevenuecodechildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevenuecodechildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
