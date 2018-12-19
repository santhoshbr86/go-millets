import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromstore from '../store';
import { Observable, Subscription, Subject } from 'rxjs';
import { LoginService } from '../services/login.service';
import { ShopingcartService } from '../services/shopingcart.service';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @Output() emitlogin = new EventEmitter();
  @Output() emitRegister = new EventEmitter();
  private shopeCartItems = [];
  isUserLoggedIn =  {
    isAuth: false,
    email: ''
  };
  private log$: Observable<any>;
  private log_: Subscription;
  constructor( private pStore: Store<fromstore.StoreState>, private logService: LoginService, private shopeCart: ShopingcartService) {
    this.log$ = this.pStore.select(fromstore.getisloggedIn);
  }

  ngOnInit() {
    // this.log$.subscribe(user => {
    //   this.isUserLoggedIn = user;
    // });
    this.isUserLoggedIn = this.logService.getIsAuthenticated();

    this.logService.getauthUser().subscribe(auth => {
      if (auth) {
        this.isUserLoggedIn.isAuth = auth.isAuth;
        this.isUserLoggedIn.email = auth.email;
       } else {
         this.isUserLoggedIn.isAuth = false;
       }
     });
     this.shopeCart.getcartUpdate().subscribe(data => {
       this.shopeCartItems.push(data);
     });
  }
  openLogin() {
    this.emitlogin.emit('openLoginModal');
  }
  openRegister() {
    this.emitRegister.emit('openRegistrationModal');
  }
  logout() {
    this.logService.doLogout();
  }
}
