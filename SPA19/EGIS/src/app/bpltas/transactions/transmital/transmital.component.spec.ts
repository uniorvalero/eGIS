import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransmitalComponent } from './transmital.component';

describe('TransmitalComponent', () => {
  let component: TransmitalComponent;
  let fixture: ComponentFixture<TransmitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransmitalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransmitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
