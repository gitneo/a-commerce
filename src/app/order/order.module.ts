import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {OrderComponent} from "./order.component";
import {OrderReceiptComponent} from "./order-receipt.component";

const routes : Routes = [
  {path:'order', component:OrderComponent}
]
@NgModule({
  declarations:[
    OrderComponent,
    OrderReceiptComponent
  ],
  imports:[
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class OrderModule{}
