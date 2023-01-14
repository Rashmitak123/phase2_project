import { Injectable, OnInit } from '@angular/core';
import { IVeges, Stores } from 'src/app/veges/veges'
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService implements OnInit{

  public cartItemList:any =[]

  public vegeList=new BehaviorSubject<any>([]);
  constructor() { }

ngOnInit(): void {
  
}
  getVeges(){
    return this.vegeList.asObservable();
  }

   setVeges(vege:any){
    this.cartItemList.push(...vege);
    this.vegeList.next(vege);
  } 

  addtoCart(vege:any){
    this.cartItemList.push(vege);
    this.vegeList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList);
  }

  getTotalPrice():number{
    let grandTotal=0;
    this.cartItemList.map((a:any)=>{
      grandTotal+=a.total;
    })
    return grandTotal;
  }
  removeCartItem(vege:any){
    this.cartItemList.map((a:any, index:any)=>{
      if(vege.id===a.id){
        this.cartItemList.splice(index, 1);
      }
    })
  }

  removeAllCart(){
    this.cartItemList=[]
    this.vegeList.next(this.cartItemList);
  }
}
