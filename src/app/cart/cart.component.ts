

import { Component, OnInit} from '@angular/core';
import { CartService } from 'src/shared/cart.service';
import { IVeges } from '../veges/veges';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit{
  public veges : IVeges[] = [];
  cart:IVeges[]=[];
  public grandTotal !: number;

  constructor(private cartService : CartService) { }

  ngOnInit(): void {
     this.cartService.getVeges()
    .subscribe(res=>{
      this.veges = res;
      //grandTotal contains the total amount payable
      this.grandTotal = this.cartService.getTotalPrice();
    })
  }

  //to make the cart empty
  emptycart(){
    this.cartService.emptyCart();
  } 

  //to delete a single item 
  deleteItem(item:IVeges){
    this.cartService.removeCartItem(item);
  }

  //to get the total price of each item
  total(item:IVeges){
    const total= item.qty*item.price;
    return total;
  }

  //getTotalCost returns the grand total
  getTotalCost() {
    return this.veges.reduce((sum,item)=>sum+=item.qty * item.price,0)
}

  //to increase the quantity of an item in the cart
  increaseQuantity(item:IVeges){
    item.qty++;  
  }

  //to decrease the quantity of an item in the cart
  decreaseQuantity(item:IVeges){
    if(item.qty === 0){
      item.qty=0;
      this.cartService.removeCartItem(item);
    }else{
      item.qty--;
    }
} 



}