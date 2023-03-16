import {NgModule} from "@angular/core";
import {HomeProductListComponent} from "./home-product-list.component";
import {CommonModule} from "@angular/common";
import {HomeComponent} from "./home.component";
import {HomeRoutingModule} from "./home-routing.module";
import {HomeProductComponent} from "./home-product.component";

@NgModule({
  declarations: [
    HomeComponent,
    HomeProductListComponent,
    HomeProductComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule{}
