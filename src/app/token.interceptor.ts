import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest <any>, next: HttpHandler): Observable<HttpEvent<any>>{
        console.log("running");
        const userToken = localStorage.getItem('token')
        const userEmail = localStorage.getItem('email')
        console.log(userEmail)
        if(!userToken){
            return next.handle(req);
        }
        const headers = new HttpHeaders({ token: userToken , email: userEmail });
        const customReq = req.clone({ headers });
    
        return next.handle(customReq);
        
    
    }
}