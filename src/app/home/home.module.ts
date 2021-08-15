import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page'; 
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { FooterModule } from '../footer/footer.module';
import { CardModule } from '../card/card.module';
import { CardsModule } from '../cards/cards.module';
import { ReviewModule } from '../review/review.module';
import { MencardModule } from '../mencard/mencard.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ExploreContainerComponentModule,
    FooterModule,
    CardModule,
    CardsModule,
    ReviewModule,
    MencardModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
