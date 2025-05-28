import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupBaranggayComponent } from './setup-baranggay.component';

describe('SetupBaranggayComponent', () => {
  let component: SetupBaranggayComponent;
  let fixture: ComponentFixture<SetupBaranggayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetupBaranggayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetupBaranggayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
