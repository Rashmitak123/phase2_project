import { HttpClient, HttpHeaders } from "@angular/common/http";
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

      this.vegeList.next(this.cart);

      const exist=this.cart.find(({name})=>name===vege.name);

      if(!exist){

        this.cart.push({...vege,qty:1})

        return

      }

      exist.qty +=1;

    }

    updateCartVege(cartVege : IVeges):void{
      const headers= new HttpHeaders({'Content-Type':'application/json'});
      const url= `${this.url}/${cartVege.id}`;
      //logic to call http put method to update the product on the given url
      this.http.put<IVeges>(url, cartVege, {headers}).subscribe(data=>{
          console.log('update vege'+ data);
          const foundIndex = this.cart.findIndex(item=>item.id === cartVege.id);
            if(foundIndex > -1){
              this.cart[foundIndex]=cartVege;
              console.log(this.cart[foundIndex])
            }
          })  
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