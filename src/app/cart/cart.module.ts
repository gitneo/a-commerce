import {NgModule} from "@angular/core";
import {CartComponent} from "./cart.component";
import {CommonModule} from "@angular/common";
import {CartItemListingComponent} from "./cart-item-listing.component";
import {CartRoutingModule} from "./cart-routing.module";
import {CartItemComponent} from "./cart-item.component";
import {CartSummaryComponent} from "./cart-summary.component";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations:[
    CartComponent,
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
