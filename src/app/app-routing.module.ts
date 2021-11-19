import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesRoutingModule } from './pages/pages.routing';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), PagesRoutingModule ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
