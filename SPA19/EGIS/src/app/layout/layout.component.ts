import { Component } from '@angular/core';
import { RouterModule, RouterOutlet, Router } from '@angular/router';
import { AuthService } from '../toims/services/auth.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterModule,
    RouterOutlet
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

  constructor(private auth: AuthService, private router: Router) {}
  logout() {
    localStorage.removeItem('token');
    this.auth.logout();
    this.router.navigate(['/login']);
    //location.href = '/login';
  }

  closeDropdowns() {
  // Close all open dropdowns
    const dropdowns = document.querySelectorAll('.dropdown-menu.show');
    dropdowns.forEach((dropdown) => dropdown.classList.remove('show'));
  }
}
