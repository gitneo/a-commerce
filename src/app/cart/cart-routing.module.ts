import {NgModule} from "@angular/core";
import {Router, RouterModule, Routes} from "@angular/router";
import {CartPageComponent} from "./components/cart-page.component";


const routes : Routes = [
  {path:'cart', component:CartPageComponent}
]

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class CartRoutingModule{}
