import { Injectable, signal } from '@angular/core';
import { Product } from '../../models/products.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = signal<Product[]>([
    { id: 1, title: 'Product 1', price: 10, image: 'https://picsum.photos/200/300', stock: 10 },
    { id: 2, title: 'Product 2', price: 20, image: 'https://picsum.photos/200/300', stock: 0  },
    { id: 3, title: 'Product 3', price: 20, image: 'https://picsum.photos/200/300', stock: 8  },
    { id: 4, title: 'Product 4', price: 20, image: 'https://picsum.photos/200/300', stock: 0  },
  ]);

  addToCart(product:Product) {
    this.cart.set([...this.cart(), product]);
  }

  removeFromCart(id: number) {
    this.cart.set(this.cart().filter((p) => p.id !== id));
  }

  constructor() { }
}
