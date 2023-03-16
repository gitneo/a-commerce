import {Component, Input, OnInit} from "@angular/core";
import {Observable} from "rxjs";
import {CartItem} from "../shared/cart-item.interface";
import {CartService} from "./cart.service";

@Component({
  selector:'cart-product-listing',
  template:`
      <div class="col-md-12 col-sm-6 col-12" *ngFor="let cartItem of cartItems | async">
        <cart-item [cartItem]="cartItem"></cart-item>
      </div>
  `,
  styleUrls:[]
})
export class CartItemListingComponent{

  @Input() cartItems :Observable<CartItem[]>;


}
