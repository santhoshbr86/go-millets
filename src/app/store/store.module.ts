import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { storeReducers } from './reducer';
import { ProductsSelector } from './products/products.selector';
import * as fromEffects from './products/products.effects';
import * as fromLoginEffects from './login/login.effects';

import { EffectsModule } from '@ngrx/effects';
@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('mainstore', storeReducers),
    EffectsModule.forRoot([fromEffects.ProductEffects, fromLoginEffects.LoginEffects])
  ],
  declarations: [],
  providers: []
})
export class AppStoreModule { }
