import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserApplicationTabsComponent } from './user-application-tabs.component';

describe('UserApplicationTabsComponent', () => {
  let component: UserApplicationTabsComponent;
  let fixture: ComponentFixture<UserApplicationTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserApplicationTabsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserApplicationTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
