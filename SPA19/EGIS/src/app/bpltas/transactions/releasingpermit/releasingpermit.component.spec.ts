import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleasingpermitComponent } from './releasingpermit.component';

describe('ReleasingpermitComponent', () => {
  let component: ReleasingpermitComponent;
  let fixture: ComponentFixture<ReleasingpermitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReleasingpermitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReleasingpermitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
