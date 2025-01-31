import { Component, signal } from '@angular/core';
import { Product } from '../../../models/products.model';
import { ProductCardComponent } from "./product-card/product-card/product-card.component";

@Component({
  selector: 'app-products-list',
  imports: [ProductCardComponent],
  template: `
    <div class="p-8 grid grid-cols-2 gap-4">
      @for (product of products(); track product.id) {
        <!-- <div>{{ product.title }}</div> -->
         <app-product-card [product]="product"/>
      }
    </div>
  `,
  styles: ``
})
export class ProductsListComponent {
  products = signal<Product[]>([
    { id: 1, title: 'Product 1', price: 10, image: 'https://picsum.photos/200/300', stock: 10 },
    { id: 2, title: 'Product 2', price: 20, image: 'https://picsum.photos/200/300', stock: 0  },
    { id: 3, title: 'Product 3', price: 20, image: 'https://picsum.photos/200/300', stock: 8  },
    { id: 4, title: 'Product 4', price: 20, image: 'https://picsum.photos/200/300', stock: 0  },
  ]);
}

//  {{ product.title() }}  string interpolation