import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsRoutingModule } from './details-routing.module';
import {NzTableModule} from "ng-zorro-antd/table";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzGridModule} from "ng-zorro-antd/grid";
import {NzListModule} from "ng-zorro-antd/list";
import {NzDescriptionsModule} from "ng-zorro-antd/descriptions";
import {NzDividerModule} from "ng-zorro-antd/divider";
import {DetailsComponent} from "./details.component";
import {ProductPipe} from "../../../pipes/product.pipe";


@NgModule({
  imports: [
    CommonModule,
    DetailsRoutingModule,
    NzTableModule,
    NzInputModule,
    NzButtonModule,
    NzIconModule,
    NzGridModule,
    NzListModule,
    NzDescriptionsModule,
    NzDividerModule
  ],
  declarations: [
    DetailsComponent,
    ProductPipe
  ],
  exports: [
    DetailsComponent,
    ProductPipe]
})
export class DetailsModule { }
