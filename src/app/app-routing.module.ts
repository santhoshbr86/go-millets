import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import {AuthGaurdsService} from './gaurds/auth-gaurds.service';
import { CheckoutComponent } from './checkout/checkout.component';
import { AddproductComponent } from './admin/addproduct/addproduct.component';
const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'cart',
    loadChildren: './shope-cart/shope-cart.module#ShopeCartModule',
    canActivate: [AuthGaurdsService]
  },
  {
    path: 'addProduct',
    component: AddproductComponent,
    canActivate: [AuthGaurdsService]
  },
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
