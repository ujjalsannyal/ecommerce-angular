import { TestBed } from '@angular/core/testing';

import { ProductCartService } from './product-cart.service';

describe('ProductCartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductCartService = TestBed.get(ProductCartService);
    expect(service).toBeTruthy();
  });
});
