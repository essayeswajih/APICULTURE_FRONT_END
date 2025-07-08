import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environments';

export interface Category {
  id: number;
  name: string;
  description?: string;
}

export interface Product {
  id: number;
  name: string;
  description?: string;
  price: number;
  stock_quantity: number;
  category_id: number;
  discounted_price?: number;
}

export enum OrderStatus {
  PENDING = 'pending',
  PROCESSING = 'processing',
  SHIPPED = 'shipped',
  DELIVERED = 'delivered',
}

export interface Order {
  id: number;
  user_id: number;
  total_amount: number;
  status: OrderStatus;
  created_at: string;
  items: { product_id: number; quantity: number; price: number }[];
}

@Injectable({
  providedIn: 'root',
})
export class Api {
  private apiUrl = environment.apiUrl; // Assuming you have the FastAPI URL here

  constructor(private http: HttpClient) {}

  // Helper to handle API errors
  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      // Client-side or network error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Backend returned an unsuccessful response code
      errorMessage = `Error ${error.status}: ${error.message}`;
    }
    return throwError(() => new Error(errorMessage));
  }

  // Categories API
  getCategories(): Observable<Category[]> {
    return this.http
      .get<Category[]>(`${this.apiUrl}/categories`)
      .pipe(catchError(this.handleError)); // Error handling
  }

  addCategory(category: Category): Observable<Category> {
    return this.http
      .post<Category>(`${this.apiUrl}/categories`, category)
      .pipe(catchError(this.handleError)); // Error handling
  }

  updateCategory(id: number, category: Category): Observable<Category> {
    return this.http
      .put<Category>(`${this.apiUrl}/categories/${id}`, category)
      .pipe(catchError(this.handleError)); // Error handling
  }

  deleteCategory(id: number): Observable<void> {
    return this.http
      .delete<void>(`${this.apiUrl}/categories/${id}`)
      .pipe(catchError(this.handleError)); // Error handling
  }

  // Products API
  getProducts(): Observable<Product[]> {
    return this.http
      .get<Product[]>(`${this.apiUrl}/products`)
      .pipe(catchError(this.handleError)); // Error handling
  }

  addProduct(product: Product): Observable<Product> {
    return this.http
      .post<Product>(`${this.apiUrl}/products`, product)
      .pipe(catchError(this.handleError)); // Error handling
  }

  updateProduct(id: number, product: Product): Observable<Product> {
    return this.http
      .put<Product>(`${this.apiUrl}/products/${id}`, product)
      .pipe(catchError(this.handleError)); // Error handling
  }

  deleteProduct(id: number): Observable<void> {
    return this.http
      .delete<void>(`${this.apiUrl}/products/${id}`)
      .pipe(catchError(this.handleError)); // Error handling
  }

  // Orders API
  getOrders(): Observable<Order[]> {
    return this.http
      .get<Order[]>(`${this.apiUrl}/orders`)
      .pipe(catchError(this.handleError)); // Error handling
  }

  updateOrderStatus(id: number, status: OrderStatus): Observable<Order> {
    return this.http
      .put<Order>(`${this.apiUrl}/orders/${id}`, { status })
      .pipe(catchError(this.handleError)); // Error handling
  }

  createOrder(order: Order): Observable<Order> {
    return this.http
      .post<Order>(`${this.apiUrl}/orders`, order)
      .pipe(catchError(this.handleError)); // Error handling
  }

  deleteOrder(id: number): Observable<void> {
    return this.http
      .delete<void>(`${this.apiUrl}/orders/${id}`)
      .pipe(catchError(this.handleError)); // Error handling
  }
}
