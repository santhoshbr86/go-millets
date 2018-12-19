import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   let newHeader = <HttpHeaders>req.headers;
  newHeader = newHeader.set('Authorization', 'Bearer ' + localStorage.getItem('userToken'));
  newHeader = newHeader.set('Access-Control-Allow-Origin', '*');
  newHeader = newHeader.set('Content-Type', 'application/json');
  const authReq = req.clone({headers: newHeader});
    return next.handle(authReq);
   }
}
