import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TellertransactionComponent } from './tellertransaction.component';

describe('TellertransactionComponent', () => {
  let component: TellertransactionComponent;
  let fixture: ComponentFixture<TellertransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TellertransactionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TellertransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
