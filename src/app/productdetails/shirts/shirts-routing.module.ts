import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShirtsPage } from './shirts.page';

const routes: Routes = [
  {
    path: ':_id',
    component: ShirtsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShirtsPageRoutingModule {}
