import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopeCartComponent } from './shope-cart/shope-cart.component';
import { ShopeCartRoutingModule } from './shope-cart-routing.module';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    ShopeCartRoutingModule,
    FormsModule
  ],
  declarations: [ShopeCartComponent],
  providers: []
})
export class ShopeCartModule { }
