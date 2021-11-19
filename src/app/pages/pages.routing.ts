import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PagesComponent} from  './pages.component';

import {DetailsComponent} from './customer/details/details.component';



const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children:[
      {path: '', loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule)},
      {path: 'customer', loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule) },
      {path: 'customer/:id', component: DetailsComponent},
      {path: 'product', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule )}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule{}
