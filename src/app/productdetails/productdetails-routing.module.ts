import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductdetailsPage } from './productdetails.page';

const routes: Routes = [
  {
    path: '',
    component: ProductdetailsPage
  },
  {
    path: 'shirts',
    loadChildren: () => import('./shirts/shirts.module').then( m => m.ShirtsPageModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductdetailsPageRoutingModule {}
