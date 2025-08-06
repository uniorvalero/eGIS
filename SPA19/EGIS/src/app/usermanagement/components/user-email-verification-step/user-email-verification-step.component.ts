import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../../services/auth.service';
import { IOtpVerifyRequest } from '../../models/otpverifyrequest';
import { MatInputModule } from '@angular/material/input';
import { UserService } from '../../services/user.service';
import { IUser } from '../../models/user';


@Component({
  selector: 'app-user-email-verification-step',
  imports: [
    CommonModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  templateUrl: './user-email-verification-step.component.html',
  styleUrl: './user-email-verification-step.component.css'
})
export class UserEmailVerificationStepComponent {
  form!: FormGroup;
  @Input() userId!: number; // Pass this from parent after signup
  @Input() userEmail!: string;
  @Input() otpTokenId!: number; // Pass this from parent after signup
  verificationCode: string = '';
  verificationStatus: string = '';
  user: IUser = {
    id: this.userId,
    firstName: '',
    middleName: '',
    lastName: '',
    contactNo: '',
    isVerified: true,
    age: 0,
    birthDate: null as unknown as Date,
    gender: '',
    status: '',
    loginId: 0,
    profileImage: ''
  };

  constructor(private authService: AuthService, private snackBar: MatSnackBar, private fb: FormBuilder,
    private userService: UserService) {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      verificationCode: ['', Validators.maxLength(6)]
    });
  }

  onVerify() {
    const request: IOtpVerifyRequest = {
      otpTokenId: this.otpTokenId,
      code: this.verificationCode
    };
    this.authService.verifyOtp(request).subscribe({
      next: (res) => {
        this.verificationStatus = 'OTP verified successfully!';
        //update the useruser table the status to verified
        this.userService.updateUser(this.user).subscribe({
          next: () => {
            this.snackBar.open(this.verificationStatus, 'Close', { duration: 3000 });
          },
          error: (err) => {
            this.snackBar.open('Failed to update user status: ' + (err.error?.message || err.message), 'Close', { duration: 3000 });
          }
        });
      },
      error: (err) => {
        this.verificationStatus = 'Verification failed: ' + (err.error?.message || err.message);
        this.snackBar.open(this.verificationStatus, 'Close', { duration: 3000 });
      }
    });
  }

  onResend() {
    const request: IOtpVerifyRequest = {
      otpTokenId: this.otpTokenId,
      code: ''
    };
    this.authService.resendOtp(request).subscribe({
      next: () => {
        this.snackBar.open('OTP resent successfully!', 'Close', { duration: 3000 });
      },
      error: (err) => {
        this.snackBar.open('Failed to resend OTP: ' + (err.error?.message || err.message), 'Close', { duration: 3000 });
      }
    });
  }
}
