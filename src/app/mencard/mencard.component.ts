import { HttpClient } from '@angular/common/http';
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
