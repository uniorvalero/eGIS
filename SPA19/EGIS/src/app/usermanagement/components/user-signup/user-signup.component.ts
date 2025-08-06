import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { AuthService } from '../../services/auth.service';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-signup',
  standalone: true,
  imports: [
    // RecaptchaModule,
    FormsModule,
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    RouterModule
  
  ],
  template: `<h2>Signup Page</h2>`,
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})

export class UserSignupComponent {
  captchaResolved = false;
  siteKey = '6LdltZIrAAAAAMZlfIBmtCWDl8pFJ4yYGiNGanR4';

  step = 1; // 1: signup, 2: OTP verification
  message = '';
  otpTokenId?: number;
  otpCode = '';
  loginId = 0;

  signupDetails = {
    id: 0,
    email: '',
    password: ''
  };

  constructor(private authService: AuthService, private snackBar: MatSnackBar,
              private router: Router) {}

  onSendOTP() {

    this.authService.signup(this.signupDetails).subscribe({
      next: (res) => {
        this.otpTokenId = res.otpToken.id;
        this.loginId = res.otpToken.loginId;
        this.step = 2;
        this.snackBar.open('OTP sent to your email.', 'Close', { duration: 3000 });
      },
      error: (err) => {
        console.error('Error occurred during signup:', err);
        this.snackBar.open('Signup failed: ' + (err.error || err.message), 'Close', { duration: 3000 });
      }
    });
  }

  onVerifyOtp() {
    if (this.otpTokenId) {
      const request = { otpTokenId: this.otpTokenId, code: this.otpCode };
      this.authService.verifyOtp(request).subscribe({
        next: (res) => {
          this.snackBar.open('OTP verified successfully! Please complete your details.', 'Close', { duration: 3000 });
          // Redirect to user details component or handle accordingly
          console.log('OTP verified, redirecting to user details step...', request.code, this.loginId);
          this.router.navigate(['userappstep'], {
            queryParams: {
              loginid: this.loginId,
              email: this.signupDetails.email
            }
          });
          console.log('Redirecting to user details step with loginid:', this.loginId, 'and email:', this.signupDetails.email);
        },
      error: (err) => this.snackBar.open('OTP verification failed: ' + (err.error || err.message), 'Close', { duration: 3000 })
    });
  }
  } 
}


    
