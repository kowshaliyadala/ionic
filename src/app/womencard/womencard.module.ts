import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WomencardComponent } from './womencard.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [WomencardComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [WomencardComponent]
})
export class WomencardModule { }
