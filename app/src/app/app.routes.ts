import { categories } from "./app.routes.server";
import { About } from "./pages/about/about";
import { Boutique } from "./pages/boutique/boutique";
import { CategoryManagement } from "./pages/category-management/category-management";
import { Contact } from "./pages/contact/contact";
import { Home } from "./pages/home/home";
import { Routes } from '@angular/router';
import { ProductManagement } from "./pages/product-management/product-management";
import { OrderManagement } from "./pages/order-management/order-management";
import { Dashboard } from "./pages/dashboard/dashboard";

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'boutique', component: Boutique },
  {
    path: 'boutique/:category',
    component: Boutique,
    data: {
      prerender: {
        // Dynamically generate prerender params based on categories
        getPrerenderParams: () => categories.map(category => ({ category }))
      }
    }
  },
  { path: 'a-propos', component: About },
  { path: 'contact', component: Contact },
  {
    path: 'panier',
    loadComponent: () => import('./pages/panier/panier').then(m => m.Panier)
  },
  { path: 'dashboard', loadComponent: () => import('./pages/dashboard/dashboard').then(m => m.Dashboard) },
  { path: 'categories', component: CategoryManagement },
  { path: 'products', component: ProductManagement },
  { path: 'orders', component: OrderManagement },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
