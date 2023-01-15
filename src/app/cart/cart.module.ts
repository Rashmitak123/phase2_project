import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartRoutingModule } from './cart.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './cart.component';

@NgModule({
  declarations: [
   CartComponent
],
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule,
    CartRoutingModule,
],  
})

export class CartsModule { }