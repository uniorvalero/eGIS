import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenuecodeparentComponent } from './revenuecodeparent.component';

describe('RevenuecodeparentComponent', () => {
  let component: RevenuecodeparentComponent;
  let fixture: ComponentFixture<RevenuecodeparentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RevenuecodeparentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevenuecodeparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
