import {EventEmitter, Injectable} from "@angular/core";
import {CartItem} from "../interface/cart-item.interface";
import {filter, from, map, Observable, of, reduce, Subject, tap, toArray} from "rxjs";
import {Order} from "../../order/interfaces/order";

@Injectable({providedIn:"root"})
export class CartService{

  cartItems :CartItem[] = []
  cartItemSubject =  new Subject<CartItem>();
  cartSubject =  new Subject<Observable<CartItem[]>>();
  cartItemUpdateSubject =  new Subject<{item: CartItem, qty: number}>()
  cartUpdatedSubject =  new Subject<Observable<CartItem[]>>();

  cartOrderSubject =  new Subject<Order>()

  findCartItems(): Observable<CartItem[]>{
    return of(this.cartItems);
  }

  addToCart(item: CartItem) {
    console.log("adding to cart " + item)
    this.cartItems.push(item);
  }

  deleteCartItem(item: CartItem){
    console.log("Deleting cart item " + item.title);
    this.cartItems = this.cartItems.filter(i => i.image != item.image);

    console.log("Emit these :" + this.cartItems.forEach(console.log))
    this.cartSubject.next(of(this.cartItems));
  }

  updateCartItem(item :CartItem){
    this.cartItems = this.cartItems.filter(i => i.image != item.image);
    this.cartItems.push(item);
    this.cartUpdatedSubject.next(of(this.cartItems));
  }

  calculate() : Observable<number>{
    return from(this.cartItems).pipe(
        map(e => e.quantity * e.price),
        tap(console.log),
        reduce((a,b)=> a+b)
      );
  }
}
