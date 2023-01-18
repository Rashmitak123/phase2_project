import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CartService } from 'src/shared/cart.service';
import { IVeges } from '../veges/veges';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit{
  public veges : IVeges[] = [];
  public grandTotal !: number;
  
  constructor(private cartService: CartService){}
  ngOnInit(): void {
    this.cartService.getVeges()
   .subscribe(res=>{
     this.veges = res;
     this.grandTotal = this.cartService.getTotalPrice();
   })
  }

  onSubmit(pForm:NgForm){
    alert('payment success');
  }
}
