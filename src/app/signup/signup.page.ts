import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {title = 'login';
users = [];
email : any;
password : any;
name: any;

constructor(private http: HttpClient){
  this.http.get('http://127.0.0.1:8000/auth/fetchUsers').subscribe((res:any)=>{
    this.users = res.users;
  })
}
register(){
  this.http.post('http://127.0.0.1:8000/auth/register', {email: this.email, name: this.name, password: this.password}) .subscribe((res:any) => {
    this.users = res.users;
    console.log(this.users);
  })
}

  ngOnInit() {
  }

}
