import { HttpClient, HttpHandler } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { getTestBed, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IVeges, Stores } from 'src/app/veges/veges';
import { CartService } from './cart.service';

describe('CartService', () => {
  let service: CartService;
  let injector: TestBed;
  let httpMock: HttpTestingController;
  let vege:IVeges[]=[];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule, 
              ReactiveFormsModule,
              FormsModule],
      providers:[CartService,
                HttpClient,
                HttpHandler]
    });
    service = TestBed.inject(CartService);
    injector = getTestBed();
    vege=[ 
       {
         id:101,
         name:"tomato",
         stores:Stores.store1,  
         price:10,
         image:"../../assets/images/tomato.jpg",
         qty:1,
         total:0,
        },
       {
        id:102,
         name:"potato",
         stores:Stores.store2,
         price:30,
         image:"../../assets/images/apple.jpg",
         qty:1,
         total:0,
     }];
     service.cart=vege;
     httpMock = injector.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should addtoCart()', () => {
    let vege1 ={
        id:113,
        name:"corn",
        stores:Stores.store1,
        price:30,
        image:"../../assets/images/corn.jpg",
        qty:1,
        total:0,
       };
      vege=[...vege,vege1];
      service.cart.push(vege1);
      service.addtoCart(vege1);
      expect(service.cart.length).toEqual(3);
  });

  it('should check the deleteCart() method',()=>{
    let vege1 ={
      id:113,
      name:"corn",
      stores:Stores.store1,
      price:30,
      image:"../../assets/images/corn.jpg",
      qty:1,
      total:0,
     };
    vege=[...vege,vege1];
    service.cart.push(vege1);
    service.removeCartItem(vege1);  
    expect (service.cart.length).toEqual(2);
  });

  it('should check for empty',()=>{
    service.emptyCart();
    expect (service.cart.length).toEqual(0);
  })
});
