import {Component, Input, Output} from "@angular/core";
import {Observable} from "rxjs";
import {Product} from "../interfaces/product.interface";
import {ProductService} from "../services/product.service";

@Component({
  selector:'product-list',
  template:`
    <section class="content">
      <div class="container">
        <div class="card card-success">
          <div class="card-body">
            <div class="row">
              <div class="col-md-12 col-lg-6 col-xl-4" *ngFor ="let product of products | async">
                <product [product]="product" ></product>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls:[]

})
export class ProductListComponent {

  @Input() products : Observable<Product[]>

}
