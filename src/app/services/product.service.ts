import { Injectable } from '@angular/core';

import { Product } from 'src/app/models/product'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    new Product(1, 'OnePlus 1', 'OnePlus 8T 8/256GB Version', 10000),
    new Product(2, 'OnePlus 2', 'OnePlus 8T 8/256GB Version', 12000),
    new Product(3, 'OnePlus 3', 'OnePlus 8T 8/256GB Version', 25000),
    new Product(4, 'OnePlus 4', 'OnePlus 8T 8/256GB Version', 20000),
    new Product(5, 'OnePlus 5', 'OnePlus 8T 8/256GB Version', 29000),
    new Product(6, 'OnePlus 6', 'OnePlus 8T 8/256GB Version', 14900),
    new Product(7, 'OnePlus 7', 'OnePlus 8T 8/256GB Version', 24500),
    new Product(8, 'OnePlus 8', 'OnePlus 8T 8/256GB Version', 39900),
  ]

  constructor() { }

  getProducts(): Product[] {
    return this.products
  }
}
