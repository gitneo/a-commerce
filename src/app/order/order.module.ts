import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {OrderComponent} from "./component/order.component";
import {OrderSummaryComponent} from "./component/order-summary.component";

const routes : Routes = [
  {path:'order', component:OrderComponent}
]
@NgModule({
  declarations:[
    OrderComponent,
    OrderSummaryComponent
  ],
  imports:[
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class OrderModule{}
