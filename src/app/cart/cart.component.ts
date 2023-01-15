/* import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import { CartService } from '../../shared/cart.service';
import { IVeges } from '../veges/veges';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnChanges{
@Input() veges:IVeges[]=[];
constructor(){}
  ngOnChanges(changes: SimpleChanges): void {
    console.log('in onchanges')
    this.veges.forEach((e)=>console.log(e.name));
  }

ngOnInit(): void{
 
}
}
 */




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

   removeItem(item: IVeges){
    this.cartService.removeCartItem(item);
  }

  emptycart(){
    this.cartService.removeAllCart();
  } 

  deleteCart(item:IVeges){
    this.cartService.deleteCart(item);
  }
}