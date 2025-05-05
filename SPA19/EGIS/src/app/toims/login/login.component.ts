import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'], 
  imports: [ 
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule],
})
export class LoginComponent {
  
  loginForm: FormGroup;
  errorMessage: string = '';

  username : string ='admin';
  password : string ='admin';
  constructor(private fb: FormBuilder,private router: Router, private auth: AuthService) {
    
    this.loginForm = this.fb.group({
      username: new FormControl('', Validators.required),
      password: ['', [Validators.required]],
    });
  }
 
  onSubmit(): void {
    if (this.loginForm.valid) {
      // this.loginService.login(this.loginForm.value).subscribe({
      //   next: (response) => {
      //     localStorage.setItem('token', response.token);
      //     alert("yes");
      //   },
      //   error: (err) => {
      //     console.error(err);
      //     this.errorMessage = 'Invalid email or password.';
      //   },
      // });

      if (this.auth.login(this.username, this.password)) {
            this.router.navigate(['/mainlayout']);
          } else {
            alert('Login failed');
          }
        }
      }
}
