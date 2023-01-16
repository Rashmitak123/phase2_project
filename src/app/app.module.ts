import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { httpClientInMemBackendServiceFactory, HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { InMemoryEventDbService } from 'shared/inmeoryeventdbservice';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MaterialModule } from './material-module/material-module.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainHomeComponent } from './main-home/main-home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginComponent } from './user/login.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//import { VegesComponent } from './veges/veges.component';
import { InMemoryEventDbService } from 'src/shared/inmemoryeventdbservice';
import { StoreModule } from '@ngrx/store';
import { AppEffects } from './app.effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CategoryComponent } from './category/category.component';
//import { CartComponent } from './cart/cart.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ToastrModule } from 'ngx-toastr';
//import { RequestRespInterceptor } from './user/auth.interceptor';
import { PaymentComponent } from './payment/payment.component';
//import { FilterPipe } from './filter.pipe';
//import { Ng2SearchPipeModule } from 'ng2-search-filter';
//import { VegesAddComponent } from './veges/veges-add.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    MainHomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    LoginComponent,
    HomeComponent,
    CategoryComponent,
 //   CartComponent,
    PageNotFoundComponent,
    PaymentComponent,
 //   FilterPipe,
 //   VegesComponent,
 //   VegesAddComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MatToolbarModule,
    MatIconModule,
    FormsModule,
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryEventDbService),
    StoreModule.forRoot({}),
    EffectsModule.forRoot([AppEffects]),
    StoreDevtoolsModule.instrument(), 
   // Ng2SearchPipeModule, 
  ],

  providers: [
    /* {
      provide:HTTP_INTERCEPTORS,
      useClass:RequestRespInterceptor,
      multi:true
    } */
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
