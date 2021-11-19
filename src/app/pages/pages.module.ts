import {NgModule} from '@angular/core';

import {SharedModule} from 'src/app/shared/shared.module';

import {PagesComponent} from './pages.component'


@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    PagesComponent
  ],
  exports: [
    PagesComponent
  ]
})
export class PagesModule {
}
