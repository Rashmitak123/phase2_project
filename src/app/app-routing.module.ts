import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MainHomeComponent } from './main-home/main-home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoginComponent } from './user/login.component';
import { AuthGuard } from './user/auth-guard.service';
import { VegesComponent } from './veges/veges.component';
import { CartComponent } from './cart/cart.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'',pathMatch:'full', redirectTo:'home'},
  {path:'home', component: MainHomeComponent},
  {path:'cart', component:CartComponent},
  {path:'login', component:LoginComponent},
  {path:'contact-us', component:ContactUsComponent},
  {path:'about-us', component:AboutUsComponent},
  
  {
    path: 'veges',
    component: VegesComponent,
   // canActivate:[AuthGuard],
    loadChildren:()=>import('../app/vege/vege.module').then(m=>m.VegesModule)
  },

  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
