import { Pipe, PipeTransform } from '@angular/core';
import {ProductService} from '../services/product/product.service';

@Pipe({
  name: 'product'
})

export class ProductPipe implements PipeTransform {
  private name: any = null;
  constructor(private serviceProduct: ProductService) {}

  transform(idProduct: number): any {
    if(idProduct){
      let result = this.serviceProduct.productID(idProduct);
      result.subscribe(product => this.name = product[0]);
      return this.name;
    }else{
      return null;
    }
  }

}
