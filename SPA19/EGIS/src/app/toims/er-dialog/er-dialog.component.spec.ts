import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErDialogComponent } from './er-dialog.component';

describe('ErDialogComponent', () => {
  let component: ErDialogComponent;
  let fixture: ComponentFixture<ErDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
