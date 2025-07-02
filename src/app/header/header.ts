import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule,RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
   isMobileMenuOpen = false;
  isDropdownOpen = false;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    if (!this.isMobileMenuOpen) this.isDropdownOpen = false; // Close dropdown when mobile menu closes
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}
