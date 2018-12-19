import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromstore from '../store';
import { Observable, Subscription } from 'rxjs';
import { LoginService } from '../services/login.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGaurdsService {
    private co$: Observable<any>;
    private co_: Subscription;
  constructor(private router: Router, private pstore: Store<fromstore.StoreState>, private logService: LoginService) {
    this.co$ = this.pstore.select(fromstore.getisloggedIn);
  }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        // this.co$.subscribe(data => {
        //     console.log(data);
        // });
        // this.logService.getauthUser().subscribe(data => {
        //     if (data) {
        //         return true;
        //     } else {
        //         return false;
        //     }
        //   });
        // if (localStorage.getItem('userToken')) {
        //     // logged in so return true
        //     return true;
        // }

        // not logged in so redirect to login page with the return url
      //  this.router.navigate(['/home']);
     if (this.logService.getIsAuthenticated().isAuth) {
         return true;
     } else {
        this.router.navigate(['/home']);
        return false;
     }
    }
}
