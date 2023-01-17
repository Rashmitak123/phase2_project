import { HttpClientTestingModule } from '@angular/common/http/testing';
import { fakeAsync, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AboutUsComponent } from './about-us/about-us.component';
import { AppComponent } from './app.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MainHomeComponent } from './main-home/main-home.component';
import { LoginComponent } from './user/login.component';
import { VegesComponent } from './veges/veges.component';
import {Location} from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
  let location: Location;
  let router: Router;
  let fixture;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,
             ReactiveFormsModule,
            FormsModule, 
            RouterTestingModule.withRoutes([
                {path: '', redirectTo: 'home', pathMatch: 'full'},
                {path:'home', component:MainHomeComponent},
                {path:'about',component: AboutUsComponent},
                {path:'contact',component:ContactUsComponent},
                { path:'login',component:LoginComponent},
                {path:'cart',
                  loadChildren:()=>import('./cart/cart.module').then((v)=>v.CartsModule)},
                {path:'veges',
                  component: VegesComponent,
                  loadChildren:()=>import('./vege/vege.module').then((v)=>v.VegesModule),},
                {path:'**',component:PageNotFoundComponent}
           ]),   
      ],

      declarations: [
        AppComponent,
        VegesComponent,
        LoginComponent,
        MainHomeComponent,
        ContactUsComponent,
        AboutUsComponent,
        CartComponent,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    router = TestBed.get(Router);
    location = TestBed.get(Location);
    fixture = TestBed.createComponent(AppComponent);
    router.initialNavigation();
  });

  /* --- Create app ---*/
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  /* --- Title as InstaMart ---*/
  it(`should have as title 'InstaSMart'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('demoapp2');
  });

  /* --- Redirects to Home ---*/
   it(`navigate to "" redirects you to /home`, fakeAsync(() => {
    router.navigate([""]).then(() => {
      expect(location.path()).toBe("/home");
    });
  }));

  /* --- Navigate to Home Page ---*/
  it(`navigate to "home Page" takes you to /home`, fakeAsync(() => {
    router.navigate(["/home"]).then(() => {
      expect(location.path()).toBe("/home");
    });
  }));

  /* --- Navigate to Fashion Page ---*/
  it(`navigate to "Fashion Page" takes you to /fashion`, fakeAsync(() => {
    router.navigate(["/fashion"]).then(() => {
      expect(location.path()).toBe("/fashion");
    });
  }));  

  /* --- Navigate to Electronic Page ---*/
  it(`navigate to "Electronic Page" takes you to /electronic`, fakeAsync(() => {
    router.navigate(["/electronic"]).then(() => {
      expect(location.path()).toBe("/electronic");
    });
  }));  

  /* --- Navigate to About Us Page ---*/
  it(`navigate to "about Us Page" takes you to /about`, fakeAsync(() => {
    router.navigate(["/about"]).then(() => {
      expect(location.path()).toBe("/about");
    });
  }));

  /* --- Navigate to Contact Us Page ---*/
  it(`navigate to "Contact Us Page" takes you to /contact`, fakeAsync(() => {
    router.navigate(["/contact"]).then(() => {
      expect(location.path()).toBe("/contact");
    });
  }));  

  /* --- Navigate to Login Page ---*/
  it(`navigate to "Login Page" takes you to /login`, fakeAsync(() => {
    router.navigate(["/login"]).then(() => {
      expect(location.path()).toBe("/login");
    });
  }));

  /* --- Navigate Vegetable List ---*/
  it(`navigate to "Vegetable List Page" takes you to /veges`, fakeAsync(() => {
    router.navigate(["/home/veges"]).then(() => {
      expect(location.path()).toBe("/home/veges");
    });
  }));

  /* --- Navigate Shopping Cart Page ---*/
  it(`navigate to "Shopping Cart Page" takes you to /shopCart`, fakeAsync(() => {
    router.navigate(["/home/shopCart"]).then(() => {
      expect(location.path()).toBe("/home/shopCart");
    });
  }));  

  /* --- Page Not Found ---*/
  it(`navigate to "Page Not Found" takes you to /**`, fakeAsync(() => {
    router.navigate(["/**"]).then(() => {
      expect(location.path()).toBe("/**");
    });
  }));  
});