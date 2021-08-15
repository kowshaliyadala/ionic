import { HttpClient } from '@angular/common/http';
import { Component,  OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shirts',
  templateUrl: './shirts.page.html',
  styleUrls: ['./shirts.page.scss'],
})
export class ShirtsPage implements OnInit{
  products = [];
  _id = [];
  $oid: any
  image: any;
  name: any;
  detailPageUrl: any;
  op: any;
  price: any;
  type: any;
  brand: any;
  Material: any;
  Pattern: any;
  desc: any;
  color: any;
  obj: any;
  querydetail = '';
  queryid = '';

  constructor(private activatedroute: ActivatedRoute, private http: HttpClient) {
   /*  this.activatedroute.queryParams.subscribe(params =>{
      this.name = params.name; */

     /*  this.activatedroute.queryParams.subscribe(params => {
        this._id = params._id; */
        

        /* this.activatedroute.queryParams.subscribe(params => {
          console.log(params);
          this.querydetail = params.detailPageUrl;
        }); */
/* 
        this.activatedroute.queryParams.subscribe(data => {
          this.querydetail = data.products.detailPageUrl;
          this.queryid = data.products._id.$oid;
          
          
        }); */
      
    
/*     this.activatedroute.params.subscribe(param=>{
      param.$oid;
    }) */
   }
  

  ngOnInit() {
    this.http.get('http://127.0.0.1:8000/products/p').subscribe((res:any)=>{
           this.products = res.products;
           console.log(this.products);
     })
    
  }

}
