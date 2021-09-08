import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  title = 'login';
  users = [];
  email : any;
  password : any;

  constructor(private http: HttpClient, private router: Router){
    this.http.get('http://127.0.0.1:8000/auth/fetchUsers').subscribe((res:any)=>{
      this.users = res.users;
    })
  }
 login(){
    this.http.post('http://127.0.0.1:8000/auth/login', {email: this.email, password: this.password}) .subscribe((res:any) => {
      console.log(res);
      localStorage.setItem('email', this.email);
      console.log(this.email);
      localStorage.setItem('token', res.token);
      localStorage.setItem('myVar', 'abc');
      this.router.navigate(['/cart']);
      console.log(res.token) 
      alert('Login successfull!!');
    }, (error: any)=>{
      alert('invalid credentials');
      console.error(error);
    });
  }


}

