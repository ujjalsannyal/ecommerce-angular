import { Component, OnInit } from '@angular/core';
import { faStar, faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons';
import { ProductCartService } from '../service/product-cart.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  faStar = faStar;
  faShoppingCart = faShoppingCart;
  faSearch = faSearch;
  public cartLengthres: any = {cartLength: 0};

  constructor(private productCartService: ProductCartService) { }

  ngOnInit() {
    this.getCartLength();
  }

  getCartLength(): void {
    this.productCartService.getCartLength()
    .subscribe(res => {
      console.log('header:getCartLength:  ', res);
      this.cartLengthres = res;
    })
  }
}
