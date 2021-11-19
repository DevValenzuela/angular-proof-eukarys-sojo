import {NgModule} from '@angular/core';

import {SharedModule} from 'src/app/shared/shared.module';

import {PagesComponent} from './pages.component'

import {DetailsComponent} from "./customer/details/details.component";


import {NzTableModule} from 'ng-zorro-antd/table';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {NzGridModule} from 'ng-zorro-antd/grid';
import {NzListModule} from 'ng-zorro-antd/list';
import {NzDescriptionsModule} from 'ng-zorro-antd/descriptions';
import {NzDividerModule} from 'ng-zorro-antd/divider';


import {ProductPipe} from '../pipes/product.pipe';

@NgModule({
  imports: [
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
  declarations: [
    PagesComponent,
    DetailsComponent,
    ProductPipe
  ],
  exports: [
    PagesComponent,
    DetailsComponent,
    ProductPipe]
})
export class PagesModule {
}
