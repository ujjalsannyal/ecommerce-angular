import { Component, OnInit } from '@angular/core';
import { faFilter, faSort } from '@fortawesome/free-solid-svg-icons';

import { Product } from '../model/Product';
import { ProductService } from '../service/product.service';
import { ProductCartService } from '../service/product-cart.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  public faFilter = faFilter;
  public faSort = faSort;
  public actionSort = {
    name: 'sort',
    options: [
      {
        value: 'pricedesc',
        label: 'price--high to low'
      },
      {
        value: 'priceaesc',
        label: 'price--low to high'
      },
      {
        value: 'discount',
        label: 'discount'
      }
    ]
  };
  public actionFilter = {
    name: 'filter'
  };
  public products: Product[];
  public cartLength: number;
  public backUpProduct: Product[];

  constructor( private productService: ProductService, private productCartService: ProductCartService) { }
  ngOnInit() {
    this.getProducts();
  }
  getProducts(): void {
    this.productService.getProducts()
    .subscribe(products => {
      this.products = products;
      this.backUpProduct = Object.assign([], products);
    });

  }
  getSortedProducts(type: string): void {
    if (type === 'pricedesc') {
      this.products = this.products.sort((a, b): number => {
        if (a.price > b.price) {
          return -1;
        } else if (a.price < b.price) {
          return 1;
        } else {
          return 0;
        }
      });
    } else if (type === 'priceaesc') {
      this.products = this.products.sort((a, b): number => {
        if (a.price > b.price) {
          return 1;
        } else if (a.price < b.price) {
          return -1;
        } else {
          return 0;
        }
      });
    } else {
      this.products = this.products.sort((a, b): number => {
        if (a.discount > b.discount) {
          return -1;
        } else if (a.discount < b.discount) {
          return 1;
        } else {
          return 0;
        }
      });
    }
  }
  onSortSelect (data: string) {
    this.getSortedProducts(data);
  }
  addtoCart(id) {
    console.log('id: ', id)
    this.productCartService.addToCart(id);
  }
  onPriceRangeApply(res: string) {
    let resObj =  JSON.parse(res);
    console.log('onPriceRangeApply ', JSON.parse(res));

    this.priceRangeFilter(resObj.min, resObj.max);
  }

  priceRangeFilter(min: number, max: number) {
    this.products = this.backUpProduct.filter(p => p.price >= min && p.price <= max);
  }

}
