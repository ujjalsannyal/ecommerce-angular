import { Component, OnInit } from '@angular/core';
import { faStar, faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons';
import { ProductCartService } from '../service/product-cart.service';
import { ProductService } from '../service/product.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  faStar = faStar;
  faShoppingCart = faShoppingCart;
  faSearch = faSearch;
  public cartLength = 0;
  public cartServiceSub;

  constructor(private productCartService: ProductCartService, private productService: ProductService) { }

  ngOnInit() {
    this.getCartLength();
  }

  getCartLength(): void {
    this.cartServiceSub = this.productCartService.getCartLength()
    .subscribe(res => {
      // console.log('header:getCartLength:  ', res);
      this.cartLength = res;
    });
  }
  searchChange($event): void {
    const value: string = $event.target.value;
    this.productService.updateProductOnSearch(value);

  }
  ngOnDestroy(): void {
    this.cartServiceSub.unsubscribe();
  }
}
