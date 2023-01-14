import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
//import { CartService } from '../../shared/cart.service';
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
