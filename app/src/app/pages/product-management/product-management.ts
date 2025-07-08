// src/app/product-management/product-management.component.ts
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Api, Product, Category } from '../../services/api';
import { gsap } from 'gsap';
import { FormsModule } from '@angular/forms';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-product-management',
  imports: [FormsModule,CommonModule],
  templateUrl: './product-management.html',
  styleUrl: './product-management.scss'
})
export class ProductManagement implements OnInit {
  products: Product[] = [];
  categories: Category[] = [];
  newProduct: Product = { id: 0, name: '', description: '', price: 0, stock_quantity: 0, category_id: 0 };
  editMode = false;
  editProductId: number | null = null;

  constructor(
    private apiService: Api,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    this.loadProducts();
    this.apiService.getCategories().subscribe(categories => {
      this.categories = categories;
    });
  }

  addProduct() {
    if (this.editMode && this.editProductId) {
      this.apiService.updateProduct(this.editProductId, this.newProduct).subscribe(() => {
        this.resetForm();
        this.loadProducts();
      });
    } else {
      this.apiService.addProduct(this.newProduct).subscribe(() => {
        this.resetForm();
        this.loadProducts();
      });
    }
  }

  editProduct(product: Product) {
    this.newProduct = { ...product };
    this.editMode = true;
    this.editProductId = product.id;
  }

  deleteProduct(id: number) {
    this.apiService.deleteProduct(id).subscribe(() => this.loadProducts());
  }

  resetForm() {
    this.newProduct = { id: 0, name: '', description: '', price: 0, stock_quantity: 0, category_id: 0 };
    this.editMode = false;
    this.editProductId = null;
  }

  trackById(index: number, product: Product): number {
    return product.id;
  }

  private loadProducts() {
    this.apiService.getProducts().subscribe(products => {
      this.products = products;
      if (isPlatformBrowser(this.platformId)) {
        setTimeout(() => {
          const cards = document.querySelectorAll('.card');
          if (cards.length > 0) {
            gsap.from(cards, { opacity: 0, y: 20, duration: 0.5, stagger: 0.2 });
          }
        }, 0);
      }
    });
  }
}