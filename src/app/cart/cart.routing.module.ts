import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CartComponent } from "./cart.component";
import { CartsModule } from "./cart.module";
import { PaymentComponent } from "src/app/payment/payment.component"

const routes: Routes = [
    {
      path:'',component:CartComponent,
    },
  
  ];  

  @NgModule({
    imports: [
      RouterModule.forChild(routes),],
      exports:[RouterModule]})

  export class CartRoutingModule{
  }