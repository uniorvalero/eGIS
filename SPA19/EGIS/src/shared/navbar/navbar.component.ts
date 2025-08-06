import { Component } from '@angular/core';
import { RouterModule, RouterOutlet, Router } from '@angular/router';
import { AuthService } from '../../app/usermanagement/services/auth.service';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterModule,
    RouterOutlet
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  currentUser: any;
  constructor(private auth: AuthService, private router: Router) {
    this.currentUser = this.auth.getUser();
  }
  logout() {
    localStorage.removeItem('token');
    this.auth.logout();
    this.router.navigate(['login']);
    //location.href = '/login';
  }

  closeDropdowns() {
  // Close all open dropdowns
    const dropdowns = document.querySelectorAll('.dropdown-menu.show');
    dropdowns.forEach((dropdown) => dropdown.classList.remove('show'));
  }
}
