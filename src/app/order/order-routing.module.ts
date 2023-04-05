import {Component, NgModule} from "@angular/core";
import {Route, RouterModule} from "@angular/router";
import {OrderComponent} from "./component/order.component";

const routes: Route[] = [
  {path:'', component: OrderComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule{}
