import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BpltasUtilityComponent } from './bpltas-utility.component';

describe('BpltasUtilityComponent', () => {
  let component: BpltasUtilityComponent;
  let fixture: ComponentFixture<BpltasUtilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BpltasUtilityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BpltasUtilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
