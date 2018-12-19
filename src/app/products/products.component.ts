import { Component, OnInit, ViewChild, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { ProductsService, Product } from '../services/products.service';
import {ProductDetailsComponent } from './product-details/product-details.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
// import { ProductState, ProductsSelector } from '../store/products';
import * as fromstore from '../store';
import { Observable, Subscription } from 'rxjs';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
export interface Product {
  id: number;
  title: string;
  content: string;
  cat: string;
  type: string;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./products.component.scss'],
  animations: []
})
export class ProductsComponent implements OnInit {
  productsList: Product[] = [];
  products: Product[] = [];
  @ViewChild(ProductDetailsComponent) private productdetail: ProductDetailsComponent;
  private co$: Observable<any>;
  private co_: Subscription;
  constructor(private productService: ProductsService,
    private ref: ChangeDetectorRef,
    private pStore: Store<fromstore.StoreState>
   ) {
    this.co$ = pStore.select(fromstore.getProductState);
   }
  ngOnInit() {
    this.co$.subscribe(
    (data) => {
      console.log(data);
      this.productsList = data.data.products;
      this.products = this.productsList;
      this.ref.markForCheck();
    },
    (error) => console.log(error)
    );
    this.pStore.dispatch(new fromstore.GetProductsAction());
    // this.productService.getProducts().subscribe(data => {
    //   this.productsList = data.products;
    //   this.products = this.productsList;
    //   this.ref.markForCheck();
    // });
  }
  updateProducts(data) {
   if (data.length > 0) {
    const temp = data.map( t => {
      return this.productsList.filter( p => {
        console.log(p);
      return p.cat.toLowerCase() === t.type.toLowerCase();
       });
    });
    this.products = temp.reduce((a, b) => a.concat(b), []);
  } else {
    this.products = this.productsList;
  }
    this.ref.markForCheck();
    console.log(this.products);
  }
}
