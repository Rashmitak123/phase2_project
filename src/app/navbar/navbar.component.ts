import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../user/auth.service';
import { CartService } from '../../shared/cart.service'
import { IVeges } from '../veges/veges';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  
  isLoggedIn:boolean=false;
  pageTitle:string='InstaSMart';
  veges: IVeges[]=[];

  constructor(private router:Router,
      private authservice:AuthService,
      private cartService:CartService){}
  
      get isLoggedInUser():boolean{
        return this.authservice.isLoggedIn;
      }

      //get userName from AuthService
      get userName():string{
        if(this.authservice.currentUser)  
        return this.authservice.currentUser?.userName;
        return '';
      }

  ngOnInit(): void {
    this.cartService.getVeges()
      .subscribe(res=>{
          this.veges=res;
        })

       this.isLoggedIn=this.authservice.isLoggedIn;
       // get the value of the specific session storage item
        //getItem returns null if item does not exist
      if(sessionStorage.getItem('isLogged')==='true'){
       this.isLoggedIn=true;
   } 
   console.log(this.isLoggedIn, 'from init of menu ');
  }
  
     //after logout() router should navigate to the home page
    logOut():void{
      this.authservice.logOut();
      this.router.navigate(['home']);
    }

    totalItem(){
      return this.veges.reduce((sum,item)=>sum+=item.qty,0)
    }  

    ngOnDestroy(): void{
    }

    ngOnChanges():void{
      if(sessionStorage.getItem('isLogged')=='true'){
        this.isLoggedIn=true;
      }
    }
}