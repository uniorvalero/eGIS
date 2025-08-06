import { Component, NgModule } from '@angular/core';
import { ILoginRequest } from '../../models/loginrequest';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule
  ],
  //bootstrap: [AppComponent],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent {
  loginForm: FormGroup;
  errorMessage: string = '';
  email: string = '';
  password: string = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private snackBar: MatSnackBar
  ) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  private isValidCredential(email: string, password: string): boolean {
  // Static list of valid users for demo purposes
    const validUsers = [
      { email: 'mayor1@email.com', password: 'demo' },
      { email: 'admin@email.com', password: 'admin' }
    ];

    return validUsers.some(user => user.email === email && user.password === password);
  }
 
  goToSignup(): void {
    this.router.navigate(['/signup']);
  }

  onLogout(): void {
    this.authService.clearUser(); // implement this in your AuthService
    this.router.navigate(['/login']).then(success => {
      if (!success) {
        this.snackBar.open('Logout navigation failed.', 'Close', { duration: 3000 });
      }
    });
  }
  
  onLogin(): void {
    if (!this.loginForm.valid) {
      this.snackBar.open('Please enter valid credentials.', 'Close', { duration: 3000 });
      return;
    }

    const { email, password } = this.loginForm.value;
    console.log('Login attempt:', email, password); // Debug log

    if (!this.isValidCredential(email, password)) {
      this.snackBar.open('Invalid email or password.', 'Close', { duration: 3000 });
      return;
    }

    // Simulate login result
    const loginResult = { loginId: 1 }; // You can expand this as needed

    this.snackBar.open('Login successful!', 'Close', { duration: 3000 });

    if (password === 'demo') {
      this.router.navigate(['/mdashboard']).then(success => {
        if (!success) {
          this.snackBar.open('Navigation failed. Check your routes.', 'Close', { duration: 3000 });
        }
      });
    } else if (password === 'admin') {
      this.router.navigate(['/mainlayout']).then(success => {
        if (!success) {
          this.snackBar.open('Navigation failed. Check your routes.', 'Close', { duration: 3000 });
        }
      });
    } else {
      this.snackBar.open('Login failed: Unknown role.', 'Close', { duration: 3000 });
    }
  }
  // onLogin(): void {
  //   if (!this.loginForm.valid) {
  //     this.snackBar.open('Please enter valid credentials.', 'Close', { duration: 3000 });
  //     return;
  //   }

  //   const { email, password } = this.loginForm.value;
  //   const request: ILoginRequest = { id: 0, email, password };
  //   const loginResult = this.authService.login(request);

  //   if (loginResult) {
  //     this.snackBar.open('Login successful!', 'Close', { duration: 3000 });
  //     // Optionally store user info for later use
  //     // this.authService.setUser({ email, password, loginId: loginResult.loginId });

  //     if (password === 'demo') {
  //       this.router.navigate(['/mdashboard']).then(success => {
  //         if (!success) {
  //           this.snackBar.open('Navigation failed. Check your routes.', 'Close', { duration: 3000 });
  //         }
  //       });
  //     } else if (password === 'admin') {
  //       this.router.navigate(['/mainlayout']).then(success => {
  //         if (!success) {
  //           this.snackBar.open('Navigation failed. Check your routes.', 'Close', { duration: 3000 });
  //         }
  //       });
  //     } else {
  //       this.snackBar.open('Login failed: Unknown role.', 'Close', { duration: 3000 });
  //     }
  //   } else {
  //     this.snackBar.open('Login failed', 'Close', { duration: 3000 });
  //   }
  // }
}
