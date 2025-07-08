import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
   {
    path: 'boutique/:category',
    renderMode: RenderMode.Prerender, // Ensure prerender is set here
    async getPrerenderParams() {
      const category = categories; // Import routes-ids correctly
      return category.map(category => ({ category })); // This will match the dynamic `:id` param
    },
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
// routes-categories.ts
export const categories = ['Ruches', 'Vêtements', 'Miellerie', 'Nourrisseurs', 'Produits de la ruche'];
