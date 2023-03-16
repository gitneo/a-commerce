import {Injectable} from "@angular/core";
import {Product} from "../shared/product.interface";
import {Observable, of, shareReplay, Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({providedIn: "root"})
export class HomeProductService{

  constructor(private http:HttpClient) {
  }

  productSubject :Subject<Product> =  new Subject<Product>();

  findProducts() : Observable<Product[]>{
    return this.http.get<Product[]>("../../assets/products.json").pipe(shareReplay(1000));
  }

}
