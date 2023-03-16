import {Component, Input, Output} from "@angular/core";
import {Observable} from "rxjs";
import {Product} from "../shared/product.interface";
import {HomeProductService} from "./home-product.service";

@Component({
  selector:'home-product-list',
  template:`
    <section class="content">
      <div class="container">
        <div class="card card-success">
          <div class="card-body">
            <div class="row">
              <div class="col-md-12 col-lg-6 col-xl-4" *ngFor ="let product of products | async">
                <home-product [product]="product" ></home-product>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls:[]

})
export class HomeProductListComponent{

  @Input() products : Observable<Product[]>

}
