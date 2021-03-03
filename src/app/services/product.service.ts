import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product'
@Injectable({
  providedIn: 'root'
})

export class ProductService {
products: Product[] = [
  new Product(1,'Product name 1','OnePlus 1', 5000),
  new Product(2,'Product name 2','OnePlus 2', 5000),
  new Product(3,'Product name 3','OnePlus 3', 5000),
  new Product(5,'Product name 5','OnePlus 5', 5000),
  new Product(6,'Product name 6','OnePlus 6', 5000),
  new Product(7,'Product name 7','OnePlus 7', 5000),
  new Product(8,'Product name 8','OnePlus 8', 5000),
  new Product(9,'Product name 9','OnePlus 9', 5000),
  new Product(10,'Product name 10','OnePlus 10', 5000),
  new Product(4,'Product name 4','OnePlus 4', 5000)
]
  constructor() { }

  getProducts(): Product[] {
    return this.products
  }
}
