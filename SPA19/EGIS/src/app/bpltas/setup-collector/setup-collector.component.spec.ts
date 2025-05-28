import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupCollectorComponent } from './setup-collector.component';

describe('SetupCollectorComponent', () => {
  let component: SetupCollectorComponent;
  let fixture: ComponentFixture<SetupCollectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetupCollectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetupCollectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
