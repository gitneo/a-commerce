import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs";
import {Order} from "../interfaces/order";
import {OrderService} from "../services/order.service";
import {CartService} from "../../cart/services/cart.service";

@Component({
  selector:'order',
  template:`
    <section class="content-header">
      <div class="container">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Your Order</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">Invoice</li>
            </ol>
          </div>
        </div>
      </div><!-- /.container-fluid -->
    </section>
    <section class="content">
      <div class="container">
        <div class="row">
          <div class="col-12">

            <!-- Main content -->
            <div class="invoice p-3 mb-3" *ngFor="let order of orders | async">
              <!-- title row -->
              <order-summary [order]="order"></order-summary>

            </div>
            <!-- /.invoice -->
          </div><!-- /.col -->
        </div><!-- /.row -->
      </div><!-- /.container-fluid -->
    </section>
    <!-- /.content -->

  `
})
export class OrderComponent implements OnInit{

  orders : Observable<Order[]>

  constructor(private orderService : OrderService, private cartService : CartService) {}
  ngOnInit(): void {
    this.orders = this.orderService.findOrders();
  }

  private createOrder(order: Order) {
    console.log("In order component")
    this.orderService.createOrder(order);
  }
}
