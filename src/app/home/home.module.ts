import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { BannerComponent } from './banner/banner.component';
import { CtaComponent } from './cta/cta.component';
import { CardsComponent } from './cards/cards.component';
import { PostsService } from '../services/posts.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AboutArecaComponent } from './about-areca/about-areca.component';
import { CurrentPlasticComponent } from './current-plastic/current-plastic.component';
@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    RouterModule
  ],
  declarations: [HomeComponent, BannerComponent, CtaComponent, CardsComponent, AboutArecaComponent, CurrentPlasticComponent],
  providers: [PostsService]
})
export class HomeModule { }
