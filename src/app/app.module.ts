import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HomeModule} from "./home/home.module";
import {RouterModule} from "@angular/router";
import {CartModule} from "./cart/cart.module";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {OrderModule} from "./order/order.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    HttpClientModule,
    CartModule,
    OrderModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
