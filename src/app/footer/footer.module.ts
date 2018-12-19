import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { SocialMediaComponent } from '../shared/social-media/social-media.component';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FooterComponent, SocialMediaComponent],
  exports: [FooterComponent]
})
export class FooterModule { }
