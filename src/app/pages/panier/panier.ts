import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { gsap } from 'gsap';

interface CartItem {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
}
@Component({
  selector: 'app-panier',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './panier.html',
  styleUrl: './panier.scss'
})
export class Panier implements OnInit {
  cartItems: CartItem[] = [
    {
      id: 1,
      name: 'Miel de Lavande 500g',
      image: '/assets/products/combinaison-blanche-avec-chapeau-et-voile.jpg',
      price: 12.99,
      quantity: 2
    },
    {
      id: 2,
      name: 'Ruche Dadant 10 cadres',
      image: '/assets/products/xkit-miellerie-extracteur-beetools.jpg.pagespeed.ic.HZeahRP6SC.webp',
      price: 89.99,
      quantity: 1
    }
  ];

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private meta: Meta,
    private title: Title
  ) {}

  ngOnInit(): void {
    // Set SEO meta tags
    this.title.setTitle('Panier - Apiculture Galai');
    this.meta.updateTag({
      name: 'description',
      content: 'Consultez et gérez votre panier chez Apiculture Galai. Découvrez nos produits apicoles de qualité.'
    });

    // GSAP animations
    if (isPlatformBrowser(this.platformId)) {
      gsap.from('.panier-section', {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.3,
        ease: 'power3.out',
        delay: 0.2
      });
      gsap.from('.panier-img', {
        opacity: 0,
        scale: 0.9,
        duration: 1.2,
        stagger: 0.3,
        ease: 'power3.out',
        delay: 0.4
      });
    }
  }

  updateQuantity(item: CartItem, quantity: number): void {
    if (quantity >= 1) {
      item.quantity = quantity;
    }
  }

  removeItem(itemId: number): void {
    this.cartItems = this.cartItems.filter(item => item.id !== itemId);
  }

  getSubtotal(): number {
    return this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  getTax(): number {
    return this.getSubtotal() * 0.19; // 19% tax rate (placeholder)
  }

  getTotal(): number {
    return this.getSubtotal() + this.getTax();
  }
}