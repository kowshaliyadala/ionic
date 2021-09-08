import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
items = [];
res:any;
  message: any;
  image: any;
  queryimg: any;
  queryname: any;
  querydetail: any;
  queryop: any;
  status: string;
  constructor(private http :  HttpClient) { 
    
    this.http.get("http://127.0.0.1:8000/auth/cartd").subscribe((mes:any)=>{
      this.items = mes.items;
      console.log(mes);
    });
  }
  removeItem(){
    this.http.post('http://127.0.0.1:8000/auth/cartd/remove', {queryimg: this.queryimg, queryname:this.queryname, querydetail:this.querydetail, price:this.queryop}) .subscribe((res:any) => {
      this.items = res.items;
    });
  }
    clearCart(){
        this.http.delete("http://127.0.0.1:8000/auth/cartd").subscribe(() => this.status = 'Delete successful');
        
/*       this.http.post('http://127.0.0.1:8000/products/cart', {queryimg: this.queryimg, queryname:this.queryname, querydetail:this.querydetail, price:this.queryop}) .subscribe((res:any) => {
        this.items = res.items;
        this.items = [];
        return this.items; */
     /*  this.http.get('http://127.0.0.1:8000/products/cart').subscribe((mes:any)=>{
        this.message = mes.data;
  }); */
     
    }

ngOnInit() {
}
}

