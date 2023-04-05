import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ProductModule} from "./product/product.module";
import {RouterModule, Routes} from "@angular/router";
import {CartModule} from "./cart/cart.module";
import {HttpClientModule} from "@angular/common/http";
import {OrderModule} from "./order/order.module";



const routes :Routes= [
  {path:'product', loadChildren:() => import('../app/product/product.module').then(m => m.ProductModule)},
  {path:'order', loadChildren:() => import('../app/order/order.module').then(m => m.OrderModule)},
  {path:'cart', loadChildren:() => import('../app/cart/cart.module').then(m => m.CartModule)}
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    //ProductModule,
    HttpClientModule,
    //CartModule,
    OrderModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
