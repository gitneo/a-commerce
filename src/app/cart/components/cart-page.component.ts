import {Component, OnDestroy, OnInit, Output} from "@angular/core";
import {CartService} from "../services/cart.service";
import {map, Observable, reduce, Subject, takeUntil, tap} from "rxjs";
import {CartItem} from "../interface/cart-item.interface";
import {Order} from "../../order/interfaces/order";
import {OrderService} from "../../order/services/order.service";

@Component({
  selector:'cart-component',
  template:`

    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0">Your Cart</h1>
          </div><!-- /.col -->
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Cart</a></li>
            </ol>
          </div><!-- /.col -->
        </div><!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->

    <section class="content">

      <!-- Default box -->
      <div class="container">

      <div class="card card-success">
        <div class="card-body">
          <div class="row">

              <div class="col-12 col-sm-6">
                <cart-product-listing [cartItems]="cartItems"></cart-product-listing>
              </div>

              <div class="col-12 col-sm-4">
                <h3 class="my-3">Order Summary</h3>
                <hr>
                <cart_summary></cart_summary>

                <div class="mt-4">
                  <button class="btn btn-primary btn-lg btn-flat" (click)="createOrder()">
                    PURCHASE
                  </button>
                </div>
              </div>

          </div>
        </div>
        <!-- /.card-body -->
      </div>
      <!-- /.card -->
      </div>
    </section>
    <!-- /.content -->
  `,
  styleUrls:[]
})
export class CartPageComponent implements OnInit,OnDestroy{

   @Output() cartItems : Observable<CartItem[]>
   unsubscribed  =  new Subject<void>();
  constructor(private cartService : CartService, private orderService: OrderService) {}


  ngOnInit(): void {

    this.cartItems = this.cartService.findCartItems()

    this.cartService
      .cartItemSubject
      .pipe(takeUntil(this.unsubscribed))
      .subscribe(item => this.deleteCartItemx(item))

    this.cartService
      .cartSubject
      .pipe(takeUntil(this.unsubscribed))
      .subscribe(sub => this.cartItems = sub)

    this.cartService
      .cartItemUpdateSubject
      .pipe(takeUntil(this.unsubscribed))
      .subscribe( param => this.updateCartItem(param));

  }

  deleteCartItemx(item :CartItem){
    console.log('1. deleting cart item ' + item.title);
    this.cartService.deleteCartItem(item);
  }

  updateCartItem(itemToUpdate: {item :CartItem, qty:number}){
    itemToUpdate.item.quantity = itemToUpdate.qty;
     this.cartService.updateCartItem(itemToUpdate.item)
    //this.cartService.cartItemSubject.next(itemToUpdate.item)
  }

  createOrder(){
    const order : Order = {
      id: '33333',
      paymentDue: '3333',
      items: this.cartItems
    };

    console.log("Create OrderInterface clicked: "+order.items.forEach(console.log));
    this.orderService.createOrder(order);

  }

  ngOnDestroy(): void {
    this.unsubscribed.next();
    this.unsubscribed.complete();
  }

}
