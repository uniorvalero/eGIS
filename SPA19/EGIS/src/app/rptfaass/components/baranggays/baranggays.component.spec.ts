import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaranggaysComponent } from './baranggays.component';

describe('BaranggaysComponent', () => {
  let component: BaranggaysComponent;
  let fixture: ComponentFixture<BaranggaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaranggaysComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaranggaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
