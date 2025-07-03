import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BpltasDialogMiscellaaneousUtilityComponent } from './bpltas-dialog-miscellaaneous-utility.component';

describe('BpltasDialogMiscellaaneousUtilityComponent', () => {
  let component: BpltasDialogMiscellaaneousUtilityComponent;
  let fixture: ComponentFixture<BpltasDialogMiscellaaneousUtilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BpltasDialogMiscellaaneousUtilityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BpltasDialogMiscellaaneousUtilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
