import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualUseComponent } from './actual-use.component';

describe('ActualUseComponent', () => {
  let component: ActualUseComponent;
  let fixture: ComponentFixture<ActualUseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActualUseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualUseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
