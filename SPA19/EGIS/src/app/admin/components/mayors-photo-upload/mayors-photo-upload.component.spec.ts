import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MayorsPhotoUploadComponent } from './mayors-photo-upload.component';

describe('MayorsPhotoUploadComponent', () => {
  let component: MayorsPhotoUploadComponent;
  let fixture: ComponentFixture<MayorsPhotoUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MayorsPhotoUploadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MayorsPhotoUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
