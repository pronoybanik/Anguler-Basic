import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  httpClient = inject(HttpClient)
  // products = []
  constructor() { }

  getProducts() {
    return this.httpClient.get("http://localhost:3000/products");
  }
  getProductsById(id: number) {
    console.log(id);
    return this.httpClient.get("http://localhost:3000/products/" + id);
  
  }
}
