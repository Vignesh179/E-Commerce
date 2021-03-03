import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product'
@Injectable({
  providedIn: 'root'
})

export class ProductService {
products: Product[] = [
  new Product(1,'Product name 1','OnePlus 1', 5000),
  new Product(2,'Product name 2','OnePlus 2', 9000),
  new Product(3,'Product name 3','OnePlus 3', 15000),
  new Product(4,'Product name 4','OnePlus 4', 7000)
]
  constructor() { }

  getProducts(): Product[] {
    return this.products
  }
}
