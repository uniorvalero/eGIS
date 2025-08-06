import { Component, OnInit } from '@angular/core';
import { IMayor } from '../../models/mayor';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ProfileService } from '../../../usermanagement/services/profile.service';
import { MayorsprofileService } from '../../services/mayorsprofile.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-mayors-personal-info',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    CommonModule,
    MatInputModule,
    MatCardModule,
    MatDialogModule,
    MatSelectModule,
    MatTableModule,
    FormsModule
  ],
  templateUrl: './mayors-personal-info.component.html',
  styleUrl: './mayors-personal-info.component.css'
})
export class MayorsPersonalInfoComponent implements OnInit {
  personalInfoForm: FormGroup;
  mayor: IMayor | null = null;
  
  user = {
    firstName: '',
    lastName: '',
    email: '',
    contactNo: ''
  };

address = {
  street: '',
  city: '',
  state: '',
  zipCode: ''
};

  constructor(private fb: FormBuilder, private mayorsprofileService: MayorsprofileService) {
    this.personalInfoForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contactNo: ['', Validators.required],
      address: this.fb.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required],
        zipCode: ['', Validators.required]
      })
    });
  }

  ngOnInit(): void {
    this.loadUserData();
  }

  loadUserData(): void {
    // Replace '1' with the actual mayor id as needed
    this.mayorsprofileService.getMayorsProfile(1).subscribe(mayor => {
      this.mayor = mayor;
      this.personalInfoForm.patchValue(mayor);
    });
  }

  onSubmit(): void {
    if (this.personalInfoForm.valid) {
      // Assuming you have the mayor's id and no file to upload, pass null or an empty File if needed
      const mayorId = this.mayor?.id ?? 0;
      const file: File = null as any; // Replace with actual file if available
      const user: IMayor = { ...this.personalInfoForm.value, id: mayorId };
      this.mayorsprofileService.updateMayorsProfile(mayorId, file, user).subscribe(() => {
        // Handle successful update
      }, error => {
        // Handle error
      });
    }
  }
}
