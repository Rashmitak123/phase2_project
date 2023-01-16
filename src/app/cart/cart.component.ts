

import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CartService } from 'src/shared/cart.service';
import { IVeges } from '../veges/veges';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit{
  public veges : IVeges[] = [];
  public grandTotal !: number;
  constructor(private cartService : CartService) { }

  ngOnInit(): void {
     this.cartService.getVeges()
    .subscribe(res=>{
      this.veges = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })

 // this.veges=this.cartService.getVeges();
  }

  /*  removeItem(item: IVeges){
    this.cartService.removeCartItem(item);
  } */

  emptycart(){
    this.cartService.emptyCart();
  } 

  deleteItem(item:IVeges){
    this.cartService.removeCartItem(item);
  }
}