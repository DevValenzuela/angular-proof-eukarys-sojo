import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import { Customer } from 'src/app/models/customer/customer';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { NzButtonSize } from 'ng-zorro-antd/button';
import {Subscription} from "rxjs";


@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit,  OnDestroy {
  size: NzButtonSize = 'large';
  customers: Customer[] = [];
  search?: string;

  private querySubscription!: Subscription;

  listOfColumn = [
    {
      title: 'ID',
      compare: null,
    },
    {
      title: 'Nombre',
      compare: (a: Customer, b: Customer) => a.Name.localeCompare(b.Name),
    },
    {
      title: 'Email',
      compare: (a: Customer, b: Customer) => a.EmailAddress.localeCompare(b.EmailAddress),
    },

  ];

  constructor(private customerService: CustomerService,
              private router: Router) { }

  ngOnInit() {
      this.reloadClients();
  }

  searchChangeIn(value: string){
    if(value.length <= 0){
      return this.reloadClients();
    }

    if(value.length >= 4){
      const search = this.customerService.searchList(value);
      this.querySubscription = search.subscribe((item:Customer[]) => this.customers = item);
    }
  }

  reloadClients(){
    const data = this.customerService.list();
    this.querySubscription =  data.subscribe((item:Customer[]) => this.customers = item,
      (err: any)=> console.log(err),
      ()=> console.log('Success fully data customers')
    )
  }

  onClickDetails(detailsCustomer: Customer){
    this.router.navigate([
      'customer', detailsCustomer.CustomerId
    ])
  }

  ngOnDestroy(){
    this.querySubscription?.unsubscribe();
  }

}
