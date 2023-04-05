import {NgModule} from "@angular/core";
import {CartPageComponent} from "./components/cart-page.component";
import {CommonModule} from "@angular/common";
import {CartItemListingComponent} from "./components/cart-item-listing.component";
import {CartRoutingModule} from "./cart-routing.module";
import {CartItemComponent} from "./components/cart-item.component";
import {CartSummaryComponent} from "./components/cart-summary.component";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations:[
    CartPageComponent,
    CartItemListingComponent,
    CartItemComponent,
    CartSummaryComponent
  ],
    imports: [
        CommonModule,
        CartRoutingModule,
        ReactiveFormsModule
    ]
})
export class CartModule{}
