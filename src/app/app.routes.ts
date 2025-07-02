import { About } from "./pages/about/about";
import { Boutique } from "./pages/boutique/boutique";
import { Contact } from "./pages/contact/contact";
import { Home } from "./pages/home/home";
import { Routes } from '@angular/router';

export const routes: Routes = [
{ path: '', component: Home },
  { path: 'boutique/ruches', component: Boutique },
  { path: 'boutique/vetements', component: Boutique },
  { path: 'boutique/miellerie', component: Boutique },
  { path: 'a-propos', component: About },
  { path: 'contact', component: Contact }
];
