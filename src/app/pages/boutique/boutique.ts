import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { gsap } from 'gsap';
import { isPlatformBrowser } from '@angular/common';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
}

@Component({
  selector: 'app-boutique',
  templateUrl: './boutique.html',
  styleUrls: ['./boutique.scss'],
  imports: [CommonModule, FormsModule],
})
export class Boutique implements OnInit {
  products: Product[] = [
    { id: 1, name: 'Ruche Dadant 10 cadres', category: 'Ruches', price: 120, image: 'https://via.placeholder.com/200', description: 'Ruche en bois de qualité pour apiculteurs professionnels.' },
    { id: 2, name: 'Combinaison apicole', category: 'Vêtements', price: 60, image: 'https://via.placeholder.com/200', description: 'Protection complète pour l’apiculture.' },
    { id: 3, name: 'Extracteur de miel', category: 'Miellerie', price: 250, image: 'https://via.placeholder.com/200', description: 'Extracteur manuel pour 4 cadres.' },
    { id: 4, name: 'Nourrisseur 2L', category: 'Nourrisseurs', price: 15, image: 'https://via.placeholder.com/200', description: 'Nourrisseur pour abeilles, capacité 2L.' },
    { id: 5, name: 'Miel de lavande', category: 'Produits de la ruche', price: 10, image: 'https://via.placeholder.com/200', description: 'Miel bio de lavande, 500g.' }
  ];

  categories: string[] = ['Tous', 'Ruches', 'Vetements', 'Miellerie', 'Nourrisseurs', 'Produits de la ruche'];
  selectedCategory: string = 'Tous';
  sortBy: string = 'popularite';
  sortedProducts: Product[] = [];

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Get category from route parameter
    this.route.paramMap.subscribe(params => {
      const categoryFromUrl = params.get('category');
      console.log('Category from URL:', categoryFromUrl);
      // Normalize the URL parameter to match category case (e.g., 'miellerie' -> 'Miellerie')
      this.selectedCategory = this.categories.find(
        cat => cat.toLowerCase() === (categoryFromUrl?.toLowerCase() || 'tous')
      ) || 'Tous';
      this.filterAndSortProducts();
      this.animateProducts();
      this.animateHeroSection();
      this.animateCategoryButtons();
    });
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
    this.filterAndSortProducts();
    this.animateProducts();
    this.animateCategoryButtons();
  }

  sortProducts(): void {
    this.filterAndSortProducts();
    this.animateProducts();
  }

  private filterAndSortProducts(): void {
    // Filter products by category
    let filteredProducts = this.selectedCategory === 'Tous'
      ? [...this.products]
      : this.products.filter(product => product.category === this.selectedCategory);

    // Sort products
    this.sortedProducts = filteredProducts.sort((a, b) => {
      if (this.sortBy === 'prix-asc') return a.price - b.price;
      if (this.sortBy === 'prix-desc') return b.price - a.price;
      return 0; // Default: popularity (no change)
    });
  }

  private animateHeroSection(): void {
     // GSAP animations
    if (isPlatformBrowser(this.platformId)) {
      gsap.from('.boutique-section', {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.3,
        ease: 'power3.out',
        delay: 0.2
      });
      gsap.from('.contact-img', {
        opacity: 0,
        scale: 0.9,
        duration: 1.2,
        stagger: 0.3,
        ease: 'power3.out',
        delay: 0.4
      });
    }
  }

  private animateProducts(): void {
    if (isPlatformBrowser(this.platformId)) {
      gsap.from('.product-card', {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
      });
    }
  }

  private animateCategoryButtons(): void {
    if (isPlatformBrowser(this.platformId)) {
      gsap.from('.btn', {
        opacity: 0,
        x: -50,
        duration: 1,
        stagger: 0.1,
        ease: 'power3.out',
      });
    }
  }
}
