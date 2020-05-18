import { Injectable } from '@angular/core';
import { Observable, of, Subject, BehaviorSubject } from 'rxjs';

import { Product } from '../model/Product';
import { PRODUCTS } from '../model/ProductsData';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productList = new BehaviorSubject<Product[]>(PRODUCTS);
  constructor() { }

  updateProductOnSearch(searchTerm) {
    const products: Product[] = PRODUCTS.filter(p => {
      return p.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    this.productList.next(products);
  }

  getProducts(): Observable<Product[]> {
    // return of(PRODUCTS);
    return this.productList.asObservable();
  }

  getProductById(id: string): Observable<Product> {
      return of(PRODUCTS.filter((p): boolean => p.id === parseInt(id, 10))[0]);
  }

}
