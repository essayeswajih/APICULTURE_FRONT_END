import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth'; // Assuming AuthService is used to manage authentication

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);  // Get the AuthService instance using the inject function
  const router = inject(Router);  // Get the Router instance
  
  // Check if the user is authenticated
  if (authService.isAuthenticated()) {
    return true;  // If authenticated, allow navigation
  } else {
    // If not authenticated, redirect to the login page
    router.navigate(['/login']);
    return false;  // Block navigation
  }
};
