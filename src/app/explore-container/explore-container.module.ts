import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponent } from './explore-container.component';
import { MencardModule } from '../mencard/mencard.module';
import { WomencardModule } from '../womencard/womencard.module';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, MencardModule, WomencardModule],
  declarations: [ExploreContainerComponent],
  exports: [ExploreContainerComponent]
})
export class ExploreContainerComponentModule {}
