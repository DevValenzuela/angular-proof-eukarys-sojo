import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PagesComponent} from  './pages.component';
import {CustomerComponent} from './customer/customer.component';
import {DetailsComponent} from './customer/details/details.component';
import {ProductsComponent} from './products/products.component';


const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children:[
      {path: '', component: CustomerComponent},
      {path: 'customer', component: CustomerComponent},
      {path: 'customer/:id', component: DetailsComponent},
      {path: 'product', component: ProductsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule{}
