import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IUser } from '../../models/user';
import { MatFormField, MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from '../../services/user.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-user-details-step',
  imports: [
    CommonModule,
    MatSelectModule,
    FormsModule,
    MatFormField,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  templateUrl: './user-details-step.component.html',
  styleUrls: ['./user-details-step.component.css']
})
export class UserDetailsStepComponent implements OnInit {
  userForm!: FormGroup;
  @Input() disabled: boolean = false;
  @Input() loginId: number = 0;
  @Input() email: string = '';
  @Output() userDetailsChange = new EventEmitter<IUser | null>();

  constructor(private userService: UserService, private snackBar: MatSnackBar, 
    private fb: FormBuilder) {
    this.userForm = this.fb.group({
      firstName: [''],
      middleName: [''],
      lastName: [''],
      contactNo: [''],
      age: [0],
      birthDate: [''],
      gender: [''],
      status: ['']
    });
  }
  userDetails: IUser = {
    id: 0,
    firstName: '',
    middleName: '',
    lastName: '',
    contactNo: '',
    age: 0,
    birthDate: new Date(),
    gender: '',
    status: '',
    isVerified: false,
    loginId: this.loginId ? Number(this.loginId) : 0,
    profileImage: ''
  };
  genderOptions = [
    {name: 'Male'},
    {name: 'Female'},
    {name: 'Other'}];
  statusOptions = [
    {name: 'Single'},
    {name: 'Married'},
    {name: 'Divorced'},
    {name: 'Widowed'},
    {name: 'Separated'},
    {name: 'Common-law marriage'},
    {name: 'Registered partnership'}
  ];

  get birthDateString(): string {
    if (!this.userDetails.birthDate) return '';
    const d = new Date(this.userDetails.birthDate);
    return d.toISOString().substring(0, 10);
  }

  set birthDateString(val: string) {
    this.userDetails.birthDate = val ? new Date(val) : new Date();
  }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      firstName: [''],
      middleName: [''],
      lastName: [''],
      contactNo: [''],
      age: [0],
      birthDate: [''],
      gender: [''],
      status: [''],
      profileImage: ['']
    });
  }
  onSave() {
    if (this.userDetails) {
      this.userDetails = {
        ...this.userDetails,
        firstName: this.userForm.value.firstName,
        middleName: this.userForm.value.middleName,
        lastName: this.userForm.value.lastName,
        contactNo: this.userForm.value.contactNo,
        age: this.userForm.value.age,
        birthDate: this.userForm.value.birthDate,
        gender: this.userForm.value.gender,
        status: this.userForm.value.status,
        profileImage: this.userForm.value.profileImage,
        loginId: Number(this.loginId)
      };
      console.log('User Details:', this.userDetails);
    this.userService.createUser(this.userDetails).subscribe({
      next: () => {
        this.snackBar.open('User details saved successfully!', 'Close', { duration: 3000 });
        this.userDetailsChange.emit(this.userDetails);
        // Optionally, go to next step here
      },
      error: (err) => {
        this.snackBar.open('Failed to save user details: ' + (err.error || err.message), 'Close', { duration: 3000 });
      }
    });
  }
}
}
