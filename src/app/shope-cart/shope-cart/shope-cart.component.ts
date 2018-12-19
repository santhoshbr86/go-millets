import { Component, OnInit, OnChanges } from '@angular/core';
import {ShopingcartService } from '../../services/shopingcart.service';

@Component({
  selector: 'app-shope-cart',
  templateUrl: './shope-cart.component.html',
  styleUrls: ['./shope-cart.component.scss']
})
export class ShopeCartComponent implements OnInit {
  private cartItems = [];
  private total = 0;
  constructor(private shopecart: ShopingcartService) { }

  ngOnInit() {
    this.cartItems = this.shopecart.getCartItems();
    this.cartItems = this.cartItems.map(item => {
      return {...item, qty : 0};
    });
   }
   CheckoutItems() {
    console.log(this.cartItems);
   }
   itemsCost() {
    this.cartItems.reduce(item => {
     this.total = this.total + (item.qty * item.cost);
    });
   // return this.total;
   }
}
