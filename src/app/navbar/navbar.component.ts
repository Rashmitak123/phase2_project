import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../user/auth.service';
import { CartService } from '../../shared/cart.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  
  isLoggedIn:boolean=false;
  pageTitle:string='InstaSMart ';
  constructor(private router:Router,
      private authservice:AuthService,
      private cartService:CartService){
  console.log('menu constructor')
}
  
  get userName():string{
    if(this.authservice.currentUser)
    return this.authservice.currentUser?.userName;
    return '';
  }
 
  public totalItem:number=0;
  
    ngOnInit(): void {
       this.cartService.getVeges()
        .subscribe(res=>{
          this.totalItem=res.length;
        })  
        console.log('menu on init');
        this.isLoggedIn=this.authservice.isLoggedIn;
         if(sessionStorage.getItem('isLogged')==='true'){
          this.isLoggedIn=true;
        } 
        console.log(this.isLoggedIn, 'from init of menu ') 
    }
  
    logOut():void{
      this.authservice.logOut();
      this.router.navigate(['/home']);
    }

    ngOnDestroy(): void{
      console.log('menu destroyed');
    }
    
    ngOnChanges():void{
      console.log('menu component changes');
      if(sessionStorage.getItem('isLogged')=='true'){
        this.isLoggedIn=true;
      }
    }
}
