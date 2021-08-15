import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-men',
  templateUrl: './men.page.html',
  styleUrls: ['./men.page.scss'],
})
export class MenPage implements OnInit {
  products = []
  name:any
  type: any;
  price: any;
  brand: any;
  Material: any;
  Pattern: any;
  image: any;
  des: any;
  querydetail: any;
  queryname: any;
  querymaterial: any;
  queryop: any;
  queryimg: any;
  idealfor: any;
   constructor(private http: HttpClient, private activatedroute : ActivatedRoute) {
    this.http.post('http://127.0.0.1:8000/products/men',{idealfor: this.idealfor}).subscribe((res:any)=>{
      this.products = res.products;
      console.log(this.products);
      this.name = res.name;
    console.log(this.name)   
   })
  }

/*   internship: any;

  constructor(private http: HttpClient) {
    this.http.get('https://www.autonise.com/api/course/catalog/').subscribe((res:any)=>{
      this.internship = res.internship;
      console.log(this.internship)
    })
   } */

  ngOnInit() {

  }

}  

