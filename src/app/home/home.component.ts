import {Component, OnDestroy, OnInit, Output} from "@angular/core";
import {Observable, Subscription} from "rxjs";
import {Product} from "../shared/product.interface";
import {HomeProductService} from "./home-product.service";
import {CartService} from "../cart/cart.service";

@Component({
  selector:'home-component',
  template:`
        <!-- Content Header (Page header) -->
        <div class="content-header">
          <div class="container">
            <div class="row mb-2">
              <div class="col-sm-6">
                <h1 class="m-0"> Our Product Listing</h1>
              </div><!-- /.col -->
              <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                  <li class="breadcrumb-item"><a href="#">Home</a></li>
                </ol>
              </div><!-- /.col -->
            </div><!-- /.row -->
          </div><!-- /.container-fluid -->
        </div>
        <!-- /.content-header -->
        <home-product-list [products]="products"></home-product-list>
  `,
  styleUrls:[]
})
export class HomeComponent implements OnInit, OnDestroy{

  @Output()products : Observable<Product[]>
  product: Product;
  subscription : Subscription | undefined; // never initialized

  constructor(private productService : HomeProductService, private cartService : CartService) {}

  ngOnInit(): void {
    this.products = this.productService.findProducts();
    this.subscription = this.productService
                            .productSubject
                            .subscribe(product => this.addToCart(product));
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe(); //if this subscription does not exist don't call unsubscribe
  }

  addToCart(product: Product){
    const item = {
      title: product.title,
      price: product.price,
      image: product.image,
      quantity: 1
    };

    this.cartService.addToCart(item);

  }


}
