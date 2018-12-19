import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopeCartComponent } from './shope-cart/shope-cart.component';
const routes: Routes = [
  {path: '', component: ShopeCartComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopeCartRoutingModule { }
