
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

//defines a class as a service
//indicates that component has dependency on service
@Injectable({
    providedIn:'root'
})

export class AuthGuard implements CanActivate{
    constructor(private authService:AuthService,private router:Router){}

    //checks whether the user have permission to activate the requested route
    //route: contains information about route associated with the component loaded in router outlet
    //state: info on a tree of activated route snapshots
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      return this.checkLoggedIn(state.url);
}

 checkLoggedIn(url:string):boolean{
    if(this.authService.isAdmin() || this.authService.isLoggedIn){
        console.log('Auth guard check for admin role');
        return true;
    }

    this.authService.redirectToUrl=url;
    this.router.navigate(['/login']);
    return false;
 }
}