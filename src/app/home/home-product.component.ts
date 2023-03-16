import {Component, Input, OnInit} from "@angular/core";
import {HomeProductService} from "./home-product.service";
import {Product} from "../shared/product.interface";
import {CartItem} from "../shared/cart-item.interface";
import {CartService} from "../cart/cart.service";

@Component({
  selector:'home-product',
  template:`

    <div class="card mb-2 p-3">
      <img class="card-img-top img-size-32" src="{{product.image}}" alt="{{product.title}}"
           style="width:50%; height: 200px">
      <div class="card-img-overlay d-flex flex-column align-items-end">
        <h5 class="card-title text-primary text-black">{{product.title}}</h5>
        <p class="card-text pb-2 pt-1 text-black">{{product.price}} dollars</p>
        <div class="mt-4">
          <button class="btn btn-primary btn-sm" (click)="addProductToCart(product)">
            <i class="fas fa-cart-plus fa-lg mr-2"></i>
            Add to Cart
          </button>
        </div>
      </div>
    </div>

  `,
})
export class HomeProductComponent implements OnInit{

  @Input()product :Product;
  constructor(private homeProductService : HomeProductService) {}
  ngOnInit(): void {
  }

  addProductToCart(product : Product){
    this.homeProductService.productSubject.next(product);
  }
}
