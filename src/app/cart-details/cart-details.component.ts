import { Component, OnInit } from '@angular/core';
import { faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons';

import { ProductCartService } from '../service/product-cart.service';
import { ProductCart } from '../model/ProductCart';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.scss']
})
export class CartDetailsComponent implements OnInit {
  public faPlusCircle = faPlusCircle;
  public faMinusCircle = faMinusCircle;
  public cartProduct: ProductCart[];
  public priceDetails = {
    price: 0,
    totalItem: 0,
    discount: 0
  }
  constructor(private productCartService: ProductCartService) { }

  ngOnInit() {
    this.getAllCartData();
  }

  getAllCartData(): void {
    this.productCartService.getAllCart()
    .subscribe(res => {
      console.log('getAllCartData:component: ', res);
      this.cartProduct = res;
      this.totalCalculate();
    });
  }
  totalCalculate() {
    let price = 0;
    let discount = 0;
    let totalItem = 0;
    this.cartProduct.forEach((d) => {
      price += (d.product.price * d.quantity);
      discount += ((d.product.price * (d.product.discount / 100)) * d.quantity);
      totalItem += d.quantity;
    });
    this.priceDetails = {price, discount, totalItem};
    console.log('this.priceDetails: ', this.priceDetails);
  }

  removeCart(id): void {
    console.log(id);
    this.productCartService.removeFromCart(id);
    this.totalCalculate();
  }

  addItem(id): void {
    this.productCartService.addToQuantity(id);
    this.totalCalculate();
  }
  reduceItem(id): void {
    this.productCartService.reduceToQuantity(id);
    this.totalCalculate();
  }

}
