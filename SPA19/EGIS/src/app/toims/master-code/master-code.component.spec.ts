import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterCodeComponent } from './master-code.component';

describe('MasterCodeComponent', () => {
  let component: MasterCodeComponent;
  let fixture: ComponentFixture<MasterCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MasterCodeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
