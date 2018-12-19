import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import { ProductsService } from '../../services/products.service';
import * as fromstore from '../../store';
import { pureFunction0 } from '@angular/core/src/render3/pure_function';
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent implements OnInit {
  productsList: any[] = [];
  products: any[] = [];
  productId = null;
  private co$: Observable<any>;
  private co_: Subscription;
  addProductForm: FormGroup;
  constructor(private fb: FormBuilder, private productService: ProductsService, private pStore: Store<fromstore.StoreState>) {
    this.co$ = pStore.select(fromstore.getProductState);
   }

  ngOnInit() {
    this.co$.subscribe(
      (data) => {
        this.productsList = data.data.products;
        this.products = this.productsList;
      },
      (error) => console.log(error)
      );

      this.pStore.dispatch(new fromstore.GetProductsAction());

    this.addProductForm = this.fb.group({
      title: ['', Validators.required],
      content: this.fb.group({
          size: ['', Validators.required],
          depth: ['', Validators.required],
          shape: ['', Validators.required],
          usage: ['', Validators.required]
      }),
      cat:  ['', Validators.required],
      type:  ['', Validators.required],
      img: ['', Validators.required],
      qtyIn: ['pcs',  Validators.required],
      cost: ['', Validators.required],
      stock: ['', Validators.required]
    });
  }
  addproduct() {
    console.log(this.addProductForm.value);
    if (this.productId == null) {
      this.productService.postProduct(this.addProductForm.value).subscribe(data => {
        console.log(data);
      });
    } else {
        this.productService.updateProduct(this.productId, this.addProductForm.value).subscribe(data => {
          console.log(data);
          this.productId = null;
          this.pStore.dispatch(new fromstore.GetProductsAction());
        });
    }
  }
  upadateProduct(pro) {
    this.productId = pro._id;
    this.addProductForm = this.fb.group({
      title: pro.title,
      content: this.fb.group({
        size: pro.content.size,
        depth: pro.content.depth,
        shape: pro.content.shape,
        usage: pro.content.usage
      }),
      cat: pro.cat,
      type: pro.type,
      img: pro.img,
      qtyIn: pro.qtyIn,
      cost: pro.cost,
      stock: pro.stock
    });
  }
  deleteProduct(id: string) {
    this.productService.deleteProduct(id).subscribe(data => {
      this.pStore.dispatch(new fromstore.GetProductsAction());
    });
  }
}
