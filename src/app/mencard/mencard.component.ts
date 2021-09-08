/* import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mencard',
  templateUrl: './mencard.component.html',
  styleUrls: ['./mencard.component.scss'],
})
export class MencardComponent implements OnInit {
  internship: any;
  products = []
  
  idealfor: any;

  constructor(private http: HttpClient) {
    this.http.post('http://127.0.0.1:8000/products/men', {idealfor : this.idealfor}).subscribe((res:any)=>{
      this.internship = res.internship;
    })
   }

  ngOnInit() {}

}
 */


import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mencard',
  templateUrl: './mencard.component.html',
  styleUrls: ['./mencard.component.scss'],
})
export class MencardComponent implements OnInit {
  
  idealfor = [];
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
i3:any;




constructor(private http: HttpClient, private activatedRoute: ActivatedRoute){
  this.http.get('http://127.0.0.1:8000/products/men').subscribe((res:any)=>{
    this.idealfor = res.idealfor;
    console.log(this.idealfor);
})

this.activatedRoute.queryParams.subscribe(data=>{
console.log(data);

});
}



ngOnInit() {

}

}
