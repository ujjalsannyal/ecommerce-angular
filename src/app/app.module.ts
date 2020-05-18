import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { HeaderComponent } from './header/header.component';
import { ActionComponent } from './action/action.component';
import { ActionFilterComponent } from './action-filter/action-filter.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { CartDetailsComponent } from './cart-details/cart-details.component';
import { DiscountedPricePipe } from './pipe/discounted-price.pipe';
import { Ng5SliderModule } from 'ng5-slider';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HeaderComponent,
    ActionComponent,
    ActionFilterComponent,
    CartDetailsComponent,
    DiscountedPricePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatSliderModule,
    FormsModule,
    Ng5SliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
