import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-womencard',
  templateUrl: './womencard.component.html',
  styleUrls: ['./womencard.component.scss'],
})
export class WomencardComponent implements OnInit {
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
  this.http.get('http://127.0.0.1:8000/products/women').subscribe((res:any)=>{
    this.idealfor = res.idealfor;
    console.log(this.idealfor);
})

this.activatedRoute.queryParams.subscribe(data=>{
console.log(data);

});
}


  ngOnInit() {}

}
