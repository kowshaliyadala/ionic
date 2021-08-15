import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductdetailsPageRoutingModule } from './productdetails-routing.module';

import { ProductdetailsPage } from './productdetails.page';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { FooterModule } from '../footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductdetailsPageRoutingModule,
    HttpClientModule,
    ExploreContainerComponentModule,
    FooterModule
  ],
  declarations: [ProductdetailsPage]
})
export class ProductdetailsPageModule {}
