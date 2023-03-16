import {NgModule} from "@angular/core";
import {Router, RouterModule, Routes} from "@angular/router";
import {CartComponent} from "./cart.component";


const routes : Routes = [
  {path:'cart', component:CartComponent}
]

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class CartRoutingModule{}
