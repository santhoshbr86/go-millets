import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationModule } from './navigation/navigation.module';
import { HomeModule } from './home/home.module';
import { FooterModule } from './footer/footer.module';
import { ProductsModule } from './products/products.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginModule } from './login/login.module';
import { LoginComponent } from './login/login/login.component';
import { RegistrationComponent } from './login/registration/registration.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AppStoreModule } from './store/store.module';
import { CheckoutModule } from './checkout/checkout.module';
import { AuthGaurdsService } from './gaurds/auth-gaurds.service';
import { InterceptorService } from './interceptor/interceptor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { SocialMediaComponent } from './shared/social-media/social-media.component';
import { AdminModule } from './admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    AppRoutingModule,
    NavigationModule,
    HomeModule,
    FooterModule,
    HttpClientModule,
    ProductsModule,
    LoginModule,
    CheckoutModule,
    AppStoreModule,
    AdminModule
  ],
  providers: [
    AuthGaurdsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ],
  entryComponents: [LoginComponent, RegistrationComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
