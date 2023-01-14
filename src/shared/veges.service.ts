import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, tap , BehaviorSubject, throwError, map } from "rxjs";
import { Stores, IVeges } from "src/app/veges/veges";

@Injectable({
    providedIn:'root'
})
export class VegesService{
   foundIndex:number=0;
 public url="api/veges";
 veges:IVeges[]=[]; 
 private selectedVegeSource= new BehaviorSubject<IVeges | null >(null);
selectedVegeChanges$=this.selectedVegeSource.asObservable();

  constructor(private http:HttpClient){
    
  }

  getVeges():Observable<IVeges[]>{
    return this.http.get<IVeges[]>(this.url).pipe(
        tap(data=>{console.log(data);
          this.veges=data;
    }),
        catchError(this.errorHandler)
    );
  }

changeSelectedVege(selectedVege:IVeges | null):void{
  this.selectedVegeSource.next(selectedVege);
}

errorHandler=(err:any)=>{
   let errorMessage:string;
   if(err.error instanceof ErrorEvent)
     {
       errorMessage = `An error has occured ${err.error.message}`
     }
     else{
      errorMessage =  `Backend error code ${err.status} ${err.body.error}`;
     }
     console.log(err);
     return throwError(errorMessage);
  }

  newVege():IVeges{
    return {
         id:0,
        name:'',
        price:0,
        stores:Stores.store1,
        image:'\\assets\\images\\s1.jpg',
        qty:0
    };
  }

  createVege(vege:IVeges):Observable<IVeges>{
    const headers= new HttpHeaders({'Content-Type':'application/json'});
      const newVege={...vege,id:null};
    console.log(`in create method  ${this.url}`)
      return this.http.post<IVeges>(this.url,newVege,{headers})
      .pipe(
        tap(data=>{
         console.log('in create new vege'+ JSON.stringify(data));
         console.log(JSON.stringify(this.veges));
        },
        catchError(this.errorHandler)
        )
      )
  }

  deleteVege(id:number):Observable<{}>{
    const headers= new HttpHeaders({'Content-Type':'application/json'});
    const url= `${this.url}/${id}`;
    return this.http.delete<IVeges>(url,{headers})
    .pipe(
      tap(data=>{
        console.log('deleted vege with id:'+id);
       const foundIndex = this.veges.findIndex(item=>item.id===id);
      },
      catchError(this.errorHandler))
    );
  }

getVegeById(id:number):Observable<IVeges>{
  return this.getVeges().pipe(
    tap(()=>{console.log('fetch Vege with id:'+id);
     this.foundIndex =this.veges.findIndex(item=>item.id ==id);
      }),
      map(()=>this.veges[this.foundIndex]),
      catchError(this.errorHandler)
      );
   }

   updateVege(vege:IVeges):Observable<IVeges>{
    const headers= new HttpHeaders({'Content-Type':'application/json'});
    const url= `${this.url}/${vege.id}`;
    return this.http.put<IVeges>(url,vege, {headers}).pipe(
      tap(()=>{console.log('update vege with id'+vege.id);
      const foundIndex =this.veges.findIndex(item=>item.id === vege.id);
    }),
    map(()=>vege),
    catchError(this.errorHandler)
    );
   }
}