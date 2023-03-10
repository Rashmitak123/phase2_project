import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { IVeges } from "src/app/veges/veges";

@Injectable({
    providedIn: 'root'
})

export class CartService{
    cart: IVeges[]=[];
    //BehaviorSubject is the subtype of observable
    //emits only the last value of the source observable
    //it ensures that every consumer get recent most value
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
      this.vegeList.next(this.cart);
      const exist=this.cart.find(({name})=>name===vege.name);
      if(!exist){
        this.cart.push({...vege,qty:1})
        return
      }
      exist.qty +=1;
    }

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
        grandTotal+=c.price*c.qty;
      })
      return grandTotal;
    }
}