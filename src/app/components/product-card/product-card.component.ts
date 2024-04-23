import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, } from '@angular/core';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
})
export class ProductCardComponent {
  @Input() product: any;
  @Output() viewProduct = new EventEmitter<string>();

  view() {
    console.log("view");
    this.viewProduct.emit(this.product.id)
  }
}
