import { Component } from '@angular/core';
import { IProduct } from './product.model';
import { CartService } from '../cart.service';
import { ProductService } from './product.service';
import { subscribeOn } from 'rxjs';

@Component({
  selector: 'bot-catalog',
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css',
})
export class CatalogComponent {
  products: any;
  filter: string = '';

  constructor(
    private cartSvc: CartService,
    private productSvc: ProductService
  ) {}

  // Calling a method from products and subscribe to it to fetch the return data
  ngOnInit() {
    this.productSvc.getProducts().subscribe((products) => {
      this.products = products;
    });
  }

  addToCart(product: IProduct) {
    this.cartSvc.add(product);
  }

  getFiltererdProducts() {
    return this.filter === ''
      ? this.products
      : this.products.filter(
          (product: any) => product.category === this.filter
        );
  }
}
