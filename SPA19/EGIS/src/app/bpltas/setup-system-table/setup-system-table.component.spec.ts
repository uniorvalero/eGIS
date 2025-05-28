import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupSystemTableComponent } from './setup-system-table.component';

describe('SetupSystemTableComponent', () => {
  let component: SetupSystemTableComponent;
  let fixture: ComponentFixture<SetupSystemTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetupSystemTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetupSystemTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
