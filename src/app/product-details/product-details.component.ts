import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../catalog/product.model';
import { CatalogComponent } from '../catalog/catalog.component';

@Component({
  selector: 'bot-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent {
  @Input() product!: IProduct;
  @Output() buy = new EventEmitter();

  getImageURL(imageName: string) {
    return '/assets/images/robot-parts/' + imageName;
  }

  buyButtonClicked(product: IProduct) {
    // here we fired the event to be catched and listen tio it in the cataloge componenet 
    this.buy.emit()
  }

  hasDiscount(product: IProduct) {
    return product.discount > 0;
  }
}
