import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopingcartService {
  private shoppedItems = [];
  private cartSubject = new Subject<any>();
  constructor() { }

  addToCart(p) {
    this.shoppedItems.push(p);
    this.cartSubject.next(p);
  }
  getcartUpdate() {
    return this.cartSubject.asObservable();
  }
  getCartItems() {
    return this.shoppedItems;
  }
}
