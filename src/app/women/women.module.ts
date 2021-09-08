import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WomenPageRoutingModule } from './women-routing.module';

import { WomenPage } from './women.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { WomencardModule } from '../womencard/womencard.module';
import { FooterModule } from '../footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WomenPageRoutingModule,
    ExploreContainerComponentModule,
    WomencardModule,
    FooterModule
  ],
  declarations: [WomenPage]
})
export class WomenPageModule {}
