import { Component, inject } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CommonModule } from '@angular/common';
import { SearchComponent } from '../search/search.component';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductCardComponent, CommonModule, SearchComponent],
  templateUrl: './home.component.html',
})

export class HomeComponent {

  products: any[] = [];
  filterProduct: any[] = [];
  productService = inject(ProductService);
  router = inject(Router)

  ngOnInit() {
    // this.products = this.productService.products
    this.productService.getProducts().subscribe((result: any) => {
      this.products = result as any[];
      this.filterProduct = this.products
    })
  }

  onViewProduct(event: any) {
    this.router.navigateByUrl('product/' + event)
  }

  onSearch(search: string) {
    console.log("home page search value 1", search);
    if (search) {
      console.log("home page search value 2", search);
      this.filterProduct = this.products.filter(p => p?.name?.toLowerCase().includes(search.toLowerCase()))
      console.log("home page search value 3", this.filterProduct);
    } else {
      this.filterProduct = this.products
    }
  }

}
