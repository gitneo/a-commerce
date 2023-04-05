import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ProductPageComponent} from "./components/product-page.component";


const routes : Routes = [
  {path:'product', component:ProductPageComponent}
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class ProductRoutingModule {}
