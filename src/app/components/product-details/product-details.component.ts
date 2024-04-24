import { Component, inject } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
})
export class ProductDetailsComponent {
  productService = inject(ProductService)
  product: any;
  activatedRoute = inject(ActivatedRoute)
  productId = this.activatedRoute.snapshot.params["id"];
  ngOnInit() {
    this.productService.getProductsById(this.productId).subscribe(result => {
      this.product = result;
    })
  }
}
