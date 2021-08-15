import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenPageRoutingModule } from './men-routing.module';

import { MenPage } from './men.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { MencardModule } from '../mencard/mencard.module';
import { FooterModule } from '../footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenPageRoutingModule,
    ExploreContainerComponentModule,
    MencardModule,
    FooterModule
  ],
  declarations: [MenPage]
})
export class MenPageModule {}
