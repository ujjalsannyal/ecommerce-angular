import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discountedPrice'
})
export class DiscountedPricePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(args === undefined){
      return value;
    } else if (!isNaN(args)){
      return (
        parseInt(value, 10) * (
          (100 - parseInt(args, 10)) / 100
        )
      )
    } else {
      return value;
    }
  }

}
