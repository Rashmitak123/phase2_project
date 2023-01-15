import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { IVeges } from "src/app/veges/veges";

@Injectable({
    providedIn: 'root'
})

export class CartService{
    cart: IVeges[]=[];
    private vegeList=new BehaviorSubject<IVeges[]>([]);
    constructor(private http:HttpClient){}
    url="api/cart";

    getVeges(){
        return this.vegeList.asObservable();
    }  

    setVeges(veges:IVeges[]){
      this.cart.push(...veges);
      this.vegeList.next(veges);
    }

    addtoCart(vege:IVeges){
        this.cart.push(vege);
        this.vegeList.next(this.cart);
        this.getTotalPrice();
        console.log(this.cart);
    }

    deleteCart(vege:IVeges){
        const id=vege.id;
        const comIndex=this.cart.findIndex(item=>item.id===id);
        if(comIndex >-1){
            this.cart.splice(comIndex,1);
        }
    }

    getTotalPrice():number{
      let grandTotal=0;
      this.cart.map((c:IVeges)=>{
      //grandTotal+=c.total;
      })
      return grandTotal;
    }

    removeCartItem(vege:IVeges){
      this.cart.map((a:IVeges, index:any)=>{
        if(vege.id===a.id){
          this.cart.splice(index,1);
        }
      })
    }

    removeAllCart(){
      this.cart=[];
      this.vegeList.next(this.cart);
    }
}