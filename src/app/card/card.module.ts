import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [CardComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  providers:[
    HttpClient
  ],
  exports: [CardComponent]
})
export class CardModule { }
