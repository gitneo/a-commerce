import {CartItem} from "./cart-item.interface";
import {Observable} from "rxjs";

export interface Order {
  id: string;
  paymentDue: string
  items: Observable<CartItem[]>
}
