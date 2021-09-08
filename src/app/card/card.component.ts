/* import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit{
  _id: any;
  constructor(private http:HttpClient, private activatedroute:ActivatedRoute){}
  obj: any;
  name: any;
  ngOnInit():void{
    this.activatedroute.queryParams.subscribe(params=>{
      this._id = params._id;
    })
    this.obj=this.http.get("http://127.0.0.1:8000/products/p").subscribe((res:any)=>{
      console.log(res)
      this.name = res.name
    }) */
    
/*     this.obj=this.http.get("http://127.0.0.1:8000/products/p").subscribe(
      data => this.obj = data
    ) 
  }
}*/

/*  export class CardComponent implements OnInit {
   

  constructor(private http: HttpClient) {

    this.http.get('http://127.0.0.1:8000/products/p', {
  }).subscribe((response) => {
      console.log(response);
  });} 
  
   
  ngOnInit() {
  }

} */
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  products = [];
  _id = []
  $oid: any;
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
  i1:any;
  i2:any;
  message: any;
  i3:any;

  

    constructor(private http: HttpClient, private activatedRoute: ActivatedRoute){
         this.http.get('http://127.0.0.1:8000/products/p').subscribe((res:any)=>{
           this.products = res.products;
           console.log(this.products);
     })
  
     this.activatedRoute.queryParams.subscribe(data=>{
       console.log(data);
       
     });
  }



  ngOnInit() {
   
  }

}
