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

    //getter, getting veges data
    getVeges(){
        return this.vegeList.asObservable();
    }  

    //setter, push veges
    setVeges(veges:IVeges[]){
      this.cart.push(...veges);
      //emit value whichever present in veges
      this.vegeList.next(veges);
    }

    addtoCart(vege:IVeges){
        this.cart.push(vege);
        this.vegeList.next(this.cart);
        this.getTotalPrice();
        console.log(this.cart);
    }

   /*  deleteItem(vege:IVeges){
        const id=vege.id;
        const comIndex=this.cart.findIndex(item=>item.id===id);
        if(comIndex >-1){
            this.cart.splice(comIndex,1);
        }
    } */

    removeCartItem(vege:IVeges){
      this.cart.map((a:IVeges, index:any)=>{
        if(vege.id===a.id){
          this.cart.splice(index,1);
        }
      })
      this.vegeList.next(this.cart);
    } 
 
    emptyCart(){
      this.cart=[];
      this.vegeList.next(this.cart);
    }

    getTotalPrice():number{
      let grandTotal=0;
      this.cart.map((c:IVeges)=>{
        grandTotal+=c.price;
      })
      return grandTotal;
    }
}