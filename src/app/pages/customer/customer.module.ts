import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

import { CustomerRoutingModule } from './customer-routing.module';

import { CustomerComponent } from './customer.component';
import {CustomerListComponent} from "./list/customer-list.component";
import {NzTableModule} from "ng-zorro-antd/table";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzGridModule} from "ng-zorro-antd/grid";
import {NzListModule} from "ng-zorro-antd/list";
import {NzDescriptionsModule} from "ng-zorro-antd/descriptions";
import {NzDividerModule} from "ng-zorro-antd/divider";


@NgModule({
  imports: [
    CommonModule,
    CustomerRoutingModule,
    SharedModule,
    NzTableModule,
    NzInputModule,
    NzButtonModule,
    NzIconModule,
    NzGridModule,
    NzListModule,
    NzDescriptionsModule,
    NzDividerModule
  ],
  declarations: [CustomerComponent, CustomerListComponent],
  exports: [CustomerComponent, CustomerListComponent]
})
export class CustomerModule { }
