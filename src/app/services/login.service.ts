import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private isAuthenticated = false;
  private tokenExpirationTime;
  private authUserSubject = new Subject<any>();
  constructor(private http: HttpClient) { }

  dologin(data) {
   this.http.post<{message: string, auth_token: string, expiresIn: number, email: string}>
   ('http://localhost:3000/api/auth/login', data).subscribe( res => {
    if (res.auth_token) {
      console.log(res);
      this.isAuthenticated = true;
      this.authUserSubject.next({isAuth: this.isAuthenticated, email: res.email});
      this.tokenExpirationTime = setTimeout(() => {
        this.doLogout();
      }, res.expiresIn * 1000);
      const now = new Date();
      const expirationDate = new Date(now.getTime() + res.expiresIn * 1000);
      this.saveAuthDate(res.auth_token, expirationDate, res.email);
    }
   });
  }
  autoAuth() {
    if (localStorage.getItem('userToken')) {
      this.authUserSubject.next({isAuth: this.isAuthenticated, email: localStorage.getItem('email')});
      this.isAuthenticated = true;
    }
}
  signup(user) {
    return this.http.post('http://localhost:3000/api/auth/signup', user);
  }
  getauthUser() {
   return this.authUserSubject.asObservable();
  }
  doLogout() {
    localStorage.removeItem('userToken');
    localStorage.removeItem('expiration');
    localStorage.removeItem('email');
    clearTimeout(this.tokenExpirationTime);
    this.authUserSubject.next(false);
  }
  getIsAuthenticated() {
    return {
      isAuth: this.isAuthenticated,
      email: localStorage.getItem('email')
    };
  }
  private saveAuthDate(token, expiration, email) {
    localStorage.setItem('userToken', token);
    localStorage.setItem('expiration', expiration.toISOString());
    localStorage.setItem('email', email);
  }

    // localStorage.getItem('expiration');
}
