import {Component, Input, OnInit} from "@angular/core";
import {ProductService} from "../services/product.service";
import {Product} from "../interfaces/product.interface";
import {CartItem} from "../../cart/interface/cart-item.interface";
import {CartService} from "../../cart/services/cart.service";

@Component({
  selector:'product',
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
export class ProductComponent implements OnInit{

  @Input()product :Product;
  constructor(private homeProductService : ProductService) {}
  ngOnInit(): void {
  }

  addProductToCart(product : Product){
    this.homeProductService.productSubject.next(product);
  }
}
