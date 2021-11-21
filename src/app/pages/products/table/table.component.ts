import {Component, OnInit, OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';
import {Product} from '../../../models/product/product';
import {ProductService} from '../../../services/product/product.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, OnDestroy {

  listProduct: Product[] = [];

  private querySubscription!: Subscription;


  listOfColumn = [
    {
      title: 'ID',
      compare: null,
    },
    {
      title: 'Nombre',
      compare: (a: Product, b: Product) => a.Name.localeCompare(b.Name),
      priority: 1
    },
    {
      title: 'Price',
      compare: (a: Product, b: Product): number => a.Price - b.Price,
      priority: 2
    },
    {
      title: 'Weight',
      compare: (a: Product, b: Product): number => a.Weight - b.Weight,
      priority: 3
    }

  ];

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.reloadTable();
  }


  searchChangeIn(value: string) {
    if (value.length <= 0) {
      return this.reloadTable();
    }

    if (value.length >= 3) {
      const search = this.productService.searchList(value);
      this.querySubscription = search.subscribe((item: Product[]) => this.listProduct = item);
    }
  }


  reloadTable() {
    let data = this.productService.list();
    this.querySubscription = data.subscribe((product: Product[]) => {
        this.listProduct = product
      },
      err => console.log(err),
      () => console.log('Success fully data products'))
  }

  ngOnDestroy(){
    this.querySubscription?.unsubscribe();
  }

}
