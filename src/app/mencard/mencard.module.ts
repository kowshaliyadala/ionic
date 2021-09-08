import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MencardComponent } from './mencard.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [MencardComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [MencardComponent]
})
export class MencardModule { }
