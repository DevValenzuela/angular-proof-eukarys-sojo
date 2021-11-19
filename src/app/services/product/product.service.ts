import {Injectable} from '@angular/core';

import products from '../../data/product/product.json';

import {Observable} from 'rxjs';
import {Product} from '../../models/product/product';

import {ProductInterface} from '../../interface';
import {changeAccent} from '../../shared/shared.function';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  list(): Observable<Product[]> {
    return new Observable<Product[]>(
      observable => {
        const data: Product[] = [];
        products.forEach((product: ProductInterface) => {
          data.push(new Product().build(product))
        })
        observable.next(data);
      }
    );
  }

  searchList(search: string): Observable<Product[]> {
    return new Observable<Product[]>(
      observable => {
        const data: Product[] = [];
        products.forEach((product: ProductInterface) => {
          let txtSearch = search.trim().toLowerCase();
          if (txtSearch.includes(changeAccent(product.Name.toLowerCase()))) {
            data.push(new Product().build(product))
          }
        })
        observable.next(data);
      }
    );
  }

  productID(id: number):  Observable<Product[]> {
    return new Observable<Product[]>(
      observable => {
        const data: Product[] = [];
        products.forEach((product: ProductInterface) => {
          if (id === product.ProductId) {
            data.push(new Product().build(product))
          }
        })
        observable.next(data);
      }
    );
  }

}
