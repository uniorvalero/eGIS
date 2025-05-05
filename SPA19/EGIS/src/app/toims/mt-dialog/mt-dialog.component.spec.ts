import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MtDialogComponent } from './mt-dialog.component';

describe('MtDialogComponent', () => {
  let component: MtDialogComponent;
  let fixture: ComponentFixture<MtDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MtDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MtDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
