import {Injectable} from '@angular/core';

import customers from '../../data/customer/customer.json';

import {Observable} from 'rxjs';
import {Customer} from 'src/app/models/customer/customer';
import {CustomerInterface} from "../../interface";
import {changeAccent} from '../../shared/shared.function';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  list(): Observable<Customer[]> {
    return new Observable<Customer[]>(
      observable => {
        const data: Customer[] = [];
        customers.forEach(
          (customer: CustomerInterface) => {
            data.push(new Customer().build(customer));
          }
        );
        observable.next(data);
      }
    );
  }


  searchList(search: string): Observable<Customer[]> {
    return new Observable<Customer[]>(
      observable => {
        const data: Customer[] = [];
        customers.forEach(
          (customer: CustomerInterface) => {
            let txtSearch = search.trim().toLowerCase();
            if (txtSearch.includes(changeAccent(customer.Name.toLowerCase()))) {
              data.push(new Customer().build(customer));
            }
          }
        );
        observable.next(data);
      }
    );
  }

  detailGeneralId(id: number){
    return new Observable<Customer[]>(
      observable => {
        const data: Customer[] = [];
        customers.forEach(
          (customer: CustomerInterface) => {
            if (customer.CustomerId === Number(id)) {
              data.push(new Customer().build(customer));
            }
          }
        );
        observable.next(data);
      }
    );
  }
}
