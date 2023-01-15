import { validateHorizontalPosition } from "@angular/cdk/overlay";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { HttpClientBackendService } from "angular-in-memory-web-api";
import { catchError, Observable, tap, throwError } from "rxjs";
import { User } from "./user";

@Injectable({
    providedIn:'root'
})
export class AuthService{

    url='/api/users';
    currentUser!:User |null;
    redirectToUrl!:string;
    users:User[]=[];
    foundIndex!:number;
    isValid:boolean=false;
    isLoggedIn:boolean=false;
    constructor(private http:HttpClient){}

    fetchAllUsers():Observable<User[]>{
      return this.http.get<User[]>(this.url).pipe(

        tap(data=>{
          //we are assigning data to this.users
          this.users=data;
          console.log(this.users)
    }),
        catchError(this.errorHandler)
    );

  }
    login(username:string,password:string):void{
   //console.log(JSON.stringify(this.currentUser));

    // this.validateUser({userName:userName,password:password});
        }
     validateUser(user:any,users:User[]):boolean{

      console.log('validating the user',user)
      user={...user};
      this.foundIndex=users.findIndex(u=>(u.username==user.username && u.password == user.password));
      console.log('found index ',this.foundIndex)
      if(this.foundIndex > -1){

        this.currentUser=this.users[this.foundIndex];
        console.log('found the user ',this.users[this.foundIndex])
        sessionStorage.setItem('loggedInUser',JSON.stringify(this.currentUser));
       this.isValid=true;
       this.isLoggedIn=true;
       sessionStorage.setItem('isLogged','true');

        return true;
      }
    return false;
    }

    logOut():void{
      sessionStorage.removeItem('loggedInUser');
        this.currentUser=null;
        this.isLoggedIn=false;
        sessionStorage.removeItem('isLogged');
    }
    isAdmin():boolean{
      console.log(this.currentUser)
        if(this.currentUser)
        return this.currentUser?.isAdmin;

        return false;
    }




  //errorhandler which returns the Observable with errorMessage
  errorHandler=(err:any)=>{

    let errorMessage:string;
    //a client side error or network error then ErrorEvent object will be thrown

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

  }

/* import { Injectable } from "@angular/core";
import { User } from "./user";
@Injectable({
    providedIn:'root'
})
export class AuthService{

    currentUser!:User |null;
    redirectToUrl!:string;
    constructor(){}

    isLoggedIn():boolean{
        return !!this.currentUser;
    }

    login(username:string,password:string):void{

     this.currentUser={
        id:2,
        username,
        isAdmin:true
     };
    }

    logOut():void{
        this.currentUser=null;
    }
} */