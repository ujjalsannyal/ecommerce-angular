import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

import { ProductService } from './product.service';

import {ProductCart} from '../model/ProductCart';
import {PRODUCTCART} from '../model/PoductCartData';

@Injectable({
  providedIn: 'root'
})
export class ProductCartService {

  constructor(private productService: ProductService) { }
  private subject = new Subject<any>();

  private updateProduct(product) {
    // Check existing product.
    const exsistingProductIndex = PRODUCTCART.findIndex(p => p.product.id === product.id);
    if (exsistingProductIndex > -1) {
      PRODUCTCART[exsistingProductIndex].quantity += 1;
    } else {
      PRODUCTCART.push({product, quantity: 1});
    }
  }
  private removeProductFromCart(id: number) {
    // Check existing product.
    const exsistingProductIndex = PRODUCTCART.findIndex(p => p.product.id === id);
    if (exsistingProductIndex > -1) {
      PRODUCTCART.splice(exsistingProductIndex, 1);
      this.updateCartLength();
    }
  }
  private reduceProductFromCart(id: number) {
    // Check existing product.
    const exsistingProductIndex = PRODUCTCART.findIndex(p => p.product.id === id);
    if (exsistingProductIndex > -1) {
      if(PRODUCTCART[exsistingProductIndex].quantity === 1) {
        PRODUCTCART.splice(exsistingProductIndex, 1);
        this.updateCartLength();
      } else {
        PRODUCTCART[exsistingProductIndex].quantity -= 1;
      }
    }
  }
  private addProductFromCart(id: number) {
    // Check existing product.
    const exsistingProductIndex = PRODUCTCART.findIndex(p => p.product.id === id);
    if (exsistingProductIndex > -1) {
        PRODUCTCART[exsistingProductIndex].quantity += 1;
    }
  }

  addToCart(id: string): void {
    this.productService.getProductById(id)
    .subscribe(product => {
      console.log('products: ', product);
      this.updateProduct(product);
    });
    this.updateCartLength();
    console.log('addtpcart: ', PRODUCTCART);
  }

  updateCartLength() {
    this.subject.next({ cartLength: PRODUCTCART.length });
  }
  getCartLength(): Observable<number> {
    return this.subject.asObservable();
  }

  getAllCart(): Observable<ProductCart[]>{
    return of(PRODUCTCART);
  }

  addToQuantity(id): void {
    this.addProductFromCart(id);
  }
  reduceToQuantity(id): void {
    this.reduceProductFromCart(id);
  }

  removeFromCart(id): void {
    this.removeProductFromCart(id);
  }
}
