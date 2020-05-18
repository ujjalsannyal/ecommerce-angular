import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Product } from '../model/Product';
import { PRODUCTS } from '../model/ProductsData';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Observable<Product[]> {
    return of(PRODUCTS);
  }

  getProductById(id: string): Observable<Product> {
      return of(PRODUCTS.filter((p): boolean => p.id === parseInt(id, 10))[0]);
  }

}
