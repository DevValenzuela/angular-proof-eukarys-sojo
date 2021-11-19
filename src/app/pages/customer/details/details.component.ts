import {Component, OnInit, ViewChildren, QueryList} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {CustomerService} from '../../../services/customer/customer.service';
import {combineLatest} from "rxjs";
import {ProductService} from "../../../services/product/product.service";

import {Customer} from "../../../models/customer/customer";
import {SaleService} from "../../../services/sale/sale.service";
import {Sale} from "../../../models/sale/sale";
import {Product} from "../../../models/product/product";


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  dataGeneral!: Customer[];
  dataSale!: Sale[];
  totalPrice!: number;


  listOfColumn = [
    {
      title: 'ID Cliente',
      compare: null,
      priority: false
    },
    {
      title: 'ID Venta',
      compare: null,
      priority: false
    },
    {
      title: 'Detalle Factura',
      compare: null,
      priority: false
    },
    {
      title: 'Total',
      compare: null,
      priority: false
    },
  ];


  constructor(private serviceCustomer: CustomerService,
              private serviceSale: SaleService,
              private serviceProduct: ProductService,
              private activateRouter: ActivatedRoute) {
  }


  ngOnInit(): void {
    const {id} = this.activateRouter.snapshot.params;

    combineLatest([
      this.serviceCustomer.detailGeneralId(id),
      this.serviceSale.list(id),
    ]).subscribe(([dataGeneral, dataSale]) => {
      this.dataGeneral = dataGeneral;
      this.dataSale = dataSale;
    })


  }

  sumTotal(idSale: number) {
    this.dataSale.forEach(product => {
      let total: any[] = [];
      if (idSale === product.SaleID) {
        let data: any[] = [];
        product.Lines.forEach(list => {
          let result = this.serviceProduct.productID(list.ProductId);
          result.subscribe(result => {
            data.push([{...result[0], amount: list.Units}])
          })
        })
        let result = data.map(item => item[0].Price * item[0].amount);
        total.push(result);
      }
      const reducer = (previousValue: number, currentValue: number) => previousValue + currentValue;
      const resp = total[0]?.reduce(reducer, 0)
      if (resp) {
        this.totalPrice = resp
      }

    });

    return `$ ${this.totalPrice}`;

  }

  /*detailsGeneral(id: number) {
    const detailsGeneral = this.serviceCustomer.detailGeneralId(id);
    detailsGeneral.subscribe(result => {
      this.dataGeneral = result;
    })
  }

  detailSale(id: number){
    const sales_result = this.serviceSale.list(id);
    sales_result.subscribe(item => console.log(item))
  }*/


}
