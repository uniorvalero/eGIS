import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InquirytransactionComponent } from './inquirytransaction.component';

describe('InquirytransactionComponent', () => {
  let component: InquirytransactionComponent;
  let fixture: ComponentFixture<InquirytransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InquirytransactionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InquirytransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
