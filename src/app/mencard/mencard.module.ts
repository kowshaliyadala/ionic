import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MencardComponent } from './mencard.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [MencardComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [MencardComponent]
})
export class MencardModule { }
