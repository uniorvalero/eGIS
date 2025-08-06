import { Component, NgModule, OnInit } from '@angular/core';
import { IMayor } from '../../models/mayor';
import { MayorsprofileService } from '../../services/mayorsprofile.service';
import { FormGroup, FormBuilder, Validators, FormsModule } from '@angular/forms';
import { MatInputModule } from "@angular/material/input";
import { MayorsPhotoUploadComponent } from '../mayors-photo-upload/mayors-photo-upload.component';

@Component({
  selector: 'app-mayors-profile-edit',
  templateUrl: './mayors-profile-edit.component.html',
  styleUrls: ['./mayors-profile-edit.component.css'],
  imports: [
    MatInputModule,
    FormsModule,
    MayorsPhotoUploadComponent
  ]
})

export class MayorsProfileEditComponent implements OnInit {
  profileForm: FormGroup;
  mayor: IMayor | null = null;

  user: any = {
    firstName: '',
    middleName: '',
    email: '',
    address: null
  };

  constructor(private fb: FormBuilder, private mayorsProfileService: MayorsprofileService) {
    this.profileForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contactNo: ['', Validators.required],
      // Add other fields as necessary
    });
  }
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      if (this.mayor) {
        this.mayorsProfileService.updateMayorsProfile(this.mayor.id, file, this.mayor).subscribe(response => {
          // Handle successful upload response
        }, error => {
          // Handle error response
        });
      }
    }
  }

  onImageUploaded(photo: Blob) {
    if (this.mayor) {
      // Convert Blob to File before passing to the service
      const file = new File([photo], "photo.png", { type: photo.type });
      this.mayorsProfileService.updateMayorsProfile(this.mayor.id, file, this.mayor).subscribe(response => {
        // Handle successful upload response
      }, error => {
        // Handle error response
      });
    }
  }

  ngOnInit(): void {
    this.loadUserData();
  }

  loadUserData(): void {
    if (this.mayor && this.mayor.id) {
      this.mayorsProfileService.getMayorsProfile(this.mayor.id).subscribe(mayor => {
        this.mayor = mayor;
        this.profileForm.patchValue(mayor);
      });
    } else {
      // Handle case when mayor or mayor.id is not available
      // For example, you might want to fetch the mayor by another means or show an error
    }
  }

  onSubmit(): void {
    if (this.profileForm.valid) {
      const updatedUser: IMayor = { ...this.mayor, ...this.profileForm.value };
      this.mayorsProfileService.updateMayorsProfile(updatedUser.id, new File([], ""), updatedUser).subscribe(() => {
        // Handle successful update (e.g., show a success message)
      }, error => {
        // Handle error (e.g., show an error message)
      });
    }
  }
}
