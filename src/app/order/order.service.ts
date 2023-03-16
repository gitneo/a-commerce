import {Injectable} from "@angular/core";
import {from, Observable, of} from "rxjs";
import {Order} from "../shared/order";

@Injectable({providedIn:"root"})
export class OrderService{

  private orders: Order[] = [

  ];


  createOrder(order :Order){
    console.log("CreateOrderService:" + order)
    this.orders.push(order);
  }

  findOrders() :Observable<Order[]> {
    return of(this.orders);
  }

}
