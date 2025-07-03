import { About } from "./pages/about/about";
import { Boutique } from "./pages/boutique/boutique";
import { Contact } from "./pages/contact/contact";
import { Home } from "./pages/home/home";
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'boutique', component: Boutique }, // For all products
  { path: 'boutique/:category', component: Boutique }, // For specific categories
  { path: 'a-propos', component: About },
  { path: 'contact', component: Contact },
  { path: 'panier', loadComponent: () => import('./pages/panier/panier').then(m => m.Panier) }, // Lazy load panier component
  { path: '**', redirectTo: '', pathMatch: 'full' } // Handle invalid routes
];