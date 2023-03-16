import {Component, OnInit} from "@angular/core";
import {CartService} from "./cart.service";
import {Observable} from "rxjs";
import {OrderService} from "../order/order.service";
import {CartItem} from "../shared/cart-item.interface";
import {Order} from "../shared/order";

@Component({
  selector:'cart_summary',
  template:`

    <div class="card-body">
      <dl class="row">

        <dt class="col-sm-4">Subtotal</dt>
        <dd class="col-sm-8">{{cartTotal | async}}</dd>
        <hr>

        <dt class="col-sm-4">Shipping</dt>
        <dd class="col-sm-8">0.00</dd>
        <hr>

        <dt class="col-sm-4">Tax</dt>
        <dd class="col-sm-8">0.00</dd>
        <hr>

        <dt class="col-sm-4">Total</dt>
        <dd class="col-sm-8">0.00</dd>
        <hr>

      </dl>
    </div>

    <div class="bg-gray py-2 px-3 mt-4">
      <h2 class="mb-0">
        {{cartTotal | async}}
      </h2>
    </div>`
})
export class CartSummaryComponent implements OnInit{

  cartTotal : Observable<number>
  constructor(private cartService : CartService, private orderService : OrderService) {}
  ngOnInit(): void {
    this.calculate();
    this.cartService.cartItemSubject.subscribe(e => this.calculate());
    this.cartService.cartUpdatedSubject.subscribe(e => this.calculate());
  }

  calculate(){
    console.log("Calculate subtotal")
    this.cartTotal =  this.cartService.calculate();
    console.log("Calculate subtotal " + this.cartTotal )
  }
}
