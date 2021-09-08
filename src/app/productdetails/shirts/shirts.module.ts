import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShirtsPageRoutingModule } from './shirts-routing.module';

import { ShirtsPage } from './shirts.page';
import { ExploreContainerComponentModule } from 'src/app/explore-container/explore-container.module';
import { FooterModule } from 'src/app/footer/footer.module';
import { CardModule } from 'src/app/card/card.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShirtsPageRoutingModule,
    ExploreContainerComponentModule,
    FooterModule,
    CardModule,
  ],
  declarations: [ShirtsPage]
})
export class ShirtsPageModule {}
