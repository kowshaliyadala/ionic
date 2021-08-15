import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.page.html',
  styleUrls: ['./productdetails.page.scss'],
})
export class ProductdetailsPage implements OnInit {
  products : [];
  name:any;
  type: any;
  op: any;
  brand: any;
  Material: any;
  Pattern: any;
  image: any;
  desc: any;
  querydetail: any;
  queryname: any;
  querymaterial: any;
  queryop: any;
  queryimg: any;
  price: any;
  i1: any;
  i2: any;
  i3: any;
  message: any;
   constructor(private http: HttpClient, private activatedroute : ActivatedRoute) {
     
    this.http.get('http://127.0.0.1:8000/products/p').subscribe((res:any)=>{
      this.op = res.op; 
      console.log(this.op);
   })
    this.activatedroute.queryParams.subscribe(params =>{
          console.log(params);
          this.name = params.name;
          this.queryname = params.name;
          this.querydetail = params.type;
          this.querymaterial = params.material;
          this.queryop = params.op;
          this.queryimg = params.img;
          this.desc = params.desc;
          this.price = params.price;
          this.i1 = params.i1;
          this.i2 = params.i2;
          this.i3 = params.i3;
      })
    }

      addCart(){
        
        this.http.post('http://127.0.0.1:8000/products/cart', {queryimg:this.queryimg, queryname:this.queryname, querydetail:this.querydetail, price:this.queryop}) .subscribe((res:any) => {
          this.products = res.products;
          this.message = res.data;
          console.log(this.products);
       /*  this.http.get('http://127.0.0.1:8000/products/cart').subscribe((mes:any)=>{
          this.message = mes.data;
    }); */
        })
      }
  ngOnInit() {
    
  }
  
}
