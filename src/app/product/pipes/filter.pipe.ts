import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {


  // field name, predicate (eq, gt, lt), expected value


  transform(products: Product[], 
            fieldName: string,
            predicate: string, 
            value
          ): any {


        console.log("Filter called ", products.length);

        if (!products || !fieldName || !predicate || !value) {
          return products;
        }
    

        if (predicate == 'gt') {
          return products.filter( (product: any) => product[fieldName] > value)
        }


        if (predicate == 'lt') {
          return products.filter( (product: any) => product[fieldName] < value)
        }
            

        if (predicate == 'eq') {
          return products.filter( (product: any) => product[fieldName] == value)
        }

        return products;
  }

}
