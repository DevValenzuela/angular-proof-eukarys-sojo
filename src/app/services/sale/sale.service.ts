import {Injectable} from '@angular/core';

import sales from '../../data/sale/sale.json';
import {Sale} from '../../models/sale/sale';

import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SaleService {
  list(id: number): Observable<Sale[]> {
    // TODO:
    return new Observable<Sale[]>(
      observable => {
        const data: Sale[] = [];
        sales.forEach((sale: any) => {
          if(sale.CustomerId === Number(id)){
            data.push(new Sale().build(sale))
          }
        })
        observable.next(data);
      }
    );
  }
}
