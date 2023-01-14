import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { VegesAddComponent } from "../veges/veges-add.component";
import { VegesComponent } from "../veges/veges.component";
import { AuthGuard } from "../user/auth-guard.service";
import { CartComponent } from "../cart/cart.component";

const vegeRoutes: Routes = [
  {
    path: 'addVege', 
    component: VegesAddComponent,
    canActivate:[AuthGuard]
},

];

@NgModule({
  imports: [
    RouterModule.forChild(vegeRoutes),],
    exports:[RouterModule]
})

export class VegesRoutingModule{

}