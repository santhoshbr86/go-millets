import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductComponent } from './product/product.component';
import { ProductsService } from '../services/products.service';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductsFiltersComponent } from './products-filters/products-filters.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  declarations: [ProductsComponent, ProductComponent, ProductDetailsComponent, ProductsFiltersComponent],
  exports: [ProductsComponent],
  providers: [ProductsService, NgbActiveModal ],
  entryComponents: [ProductDetailsComponent]
})
export class ProductsModule { }
