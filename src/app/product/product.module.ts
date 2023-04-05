import {NgModule} from "@angular/core";
import {ProductListComponent} from "./components/product-list.component";
import {CommonModule} from "@angular/common";
import {ProductPageComponent} from "./components/product-page.component";
import {ProductRoutingModule} from "./product-routing.module";
import {ProductComponent} from "./components/product.component";

@NgModule({
  declarations: [
    ProductPageComponent,
    ProductListComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule {}
