import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import {NzTableModule} from "ng-zorro-antd/table";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzGridModule} from "ng-zorro-antd/grid";
import {NzListModule} from "ng-zorro-antd/list";
import {NzDescriptionsModule} from "ng-zorro-antd/descriptions";
import {NzDividerModule} from "ng-zorro-antd/divider";
import {ProductsComponent} from "./products.component";
import {TableComponent} from "./table/table.component";


@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule,
    NzTableModule,
    NzInputModule,
    NzButtonModule,
    NzIconModule,
    NzGridModule,
    NzListModule,
    NzDescriptionsModule,
    NzDividerModule
  ],
  declarations: [ProductsComponent,  TableComponent],
  exports: [ProductsComponent,   TableComponent]
})
export class ProductsModule { }
