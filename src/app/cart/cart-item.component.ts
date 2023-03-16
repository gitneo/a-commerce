import {Component, Input, OnInit} from "@angular/core";
import {CartService} from "./cart.service";
import {CartItem} from "../shared/cart-item.interface";
import {FormControl} from "@angular/forms";

@Component({
  selector:'cart-item',
  template:`

    <div class="info-box">
      <div class="card mb-2 attachment-block clearfix">
        <img class="card-img-top attachment-img" [src]="cartItem.image" alt="Dist Photo 1">
      </div>

      <div class="info-box-content attachment-pushed ">
        <span class="info-box-text attachment-heading ml-2">{{cartItem.title}}</span>
        <span class=" attachment-text ml-2"><label class="form-check-label">Price:</label>{{cartItem.price}}</span>
        <span>
            <div class="btn-group float-left">
              <label class="form-check-label ml-2">Quantity:</label>
              <input type="number" class="form-control ml-2" placeholder="1" style="width:60px; height: 30px" (change)="updateCart(cartItem,$event.target.value)">
            </div>
            <div class="btn-group float-right">
              <button type="button" class="btn btn-default" (click)="deleteCartItem(cartItem)">
                <i class="fas fa-align-left"></i>
              </button>
            </div>
          </span>
      </div>

    </div>
  `
})
export class CartItemComponent{

  @Input() cartItem :CartItem;
  itemQuantity =  new FormControl();
  constructor(private cartService : CartService) {}



  deleteCartItem(item : CartItem){
    console.log("delete cart item button clicked")
    this.cartService.cartItemSubject.next(item);
  }

  updateCart(item : CartItem, qty: number){
    console.log('itemxxxxxxxxxxxxxxxxxxx: '+item +' '+qty);
    const param = {
      item :item,
      qty:qty
    }
    this.cartService.cartItemUpdateSubject.next(param)
  }

}
