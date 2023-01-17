

import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
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
  bill!:number;
  constructor(private cartService : CartService) { }

  ngOnInit(): void {
     this.cartService.getVeges()
    .subscribe(res=>{
      this.veges = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })

 // this.veges=this.cartService.getVeges();
  }

  emptycart(){
    this.cartService.emptyCart();
  } 

  deleteItem(item:IVeges){
    this.cartService.removeCartItem(item);
  }

   @Output() emitVegeToCart:EventEmitter<IVeges>= new EventEmitter<IVeges>();
  increaseQuantity(p:IVeges):void{
    let index = this.veges.findIndex((vege)=> p.id === vege.id);
    this.veges[index].qty+=1;
    this.emitVegeToCart.emit(p);
 }

 decreaseQuantity(p:IVeges):void{
   let index = this.veges.findIndex((vege)=> p.id === vege.id);
  
   if(this.veges[index].qty!=0){
     this.veges[index].qty-=1;
     this.emitVegeToCart.emit(p);
   }
} 

/* increaseQuantity(item :IVeges){
  item.qty +=1;
  console.log('increase', item)
  this.cartService.updateCartVege(item);
  this.cart = this.cartService.cart;
  this.bill = this.cartService.getTotalPrice();
  console.log(this.bill);
}

// decrement qty of vege in cart
decreaseQuantity(item :IVeges){
  if(item.qty>0){
    item.qty -=1;
    console.log('decrease', item);
    this.cartService.updateCartVege(item);
    this.bill = this.cartService.getTotalPrice();
  }
  if(item.qty <= 0){
    this.deleteItem(item);
    this.bill = this.cartService.getTotalPrice();
  }
  console.log(this.bill);
} */

}