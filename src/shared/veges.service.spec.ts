/* describe('AnimalService',()=>{
  let service:AnimalService;
  let injector: TestBed;
  let httpMock: HttpTestingController;
  let animals:any[]=[];

afterEach(() => {
  httpMock.verify();
});

beforeEach(()=>{
   TestBed.configureTestingModule({
    imports:[HttpClientTestingModule],
      providers:[AnimalService],
  });
   service=TestBed.inject(AnimalService);
   injector = getTestBed();
   httpMock = injector.inject(HttpTestingController);
   animals=[
   {
       "id":111,
       "name":"dog",
       "description":"baaw baaw",
       "imageUrl":"../../assets/images/dog.jpg",
       "age":5
      },
     {
       "id":112,
       "name":"cat",
       "description":"meww meww",
       "imageUrl":"../../assets/images/cat.jpg",
       "age":3
  }];
});

it('should be created',()=>{
  expect(service).toBeTruthy();
})

it('should getAllAnimals',
  inject([HttpTestingController,AnimalService],
    (httpMock:HttpTestingController,service:AnimalService)=>{
      service.getAnimals().subscribe(resp=>expect(animals).toEqual(resp));
      const mockReq = httpMock.expectOne(service.url);
      expect(mockReq.cancelled).toBeFalsy();
      expect(mockReq.request.responseType).toEqual('json');
      mockReq.flush(animals);
  }
))

it('should get animal by id',()=>{
  let response:IAnimal;
 let animal1 ={
  "id":111,
  "name":"dog",
  "description":"baaw baaw",
  "imageUrl":"../../assets/images/dog.jpg",
  "age":3
 };
 
  const fn=spyOn(service, 'getAnimalById').and.returnValue(of(animal1));
  service.getAnimalById(111).subscribe(res=>{response=res;expect(response).toEqual(animal1);});
 expect(fn).toHaveBeenCalled();
});

it('createAnimal should post animal and return that new animal as data',()=>{
let animal1 ={
  id:113,
  name:"rabbit",
  description:"only jumpy jumpy",
  imageUrl:"../../assets/images/rabbit.jpg",
  age:3
 };
let animal2 ={
  "id":114,
  "name":"lion",
  "description":"don't come to me",
  "imageUrl":"../../assets/images/lion.jpg",
  "age":5
 };
animals =[...animals,animal1];
 service.createAnimal(animal1).subscribe(resp=>expect(resp).toEqual(animal1) )
 expect(animals.length).toEqual(3);
 const req = httpMock.expectOne(service.url);
 expect(req.request.method).toBe('POST');
 req.flush(animal1);
 });

 it('updateAnimal should update animal and return updated animal list',()=>{
  let animal2 ={
    "id":112,
    "name":"tiger",
    "description":"mood off",
    "imageUrl":"../../assets/images/tiger.jpg",
    "age":5
   };
   service.updateAnimal(animal2).subscribe(resp=>expect(resp).toEqual(animal2) )
   const req = httpMock.expectOne(`${service.url}/${animal2.id}`);
   expect(req.request.method).toBe('PUT');
   req.flush({animal2 });

   })
}); */








import { HttpClient, HttpHandler } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { getTestBed, inject, TestBed } from '@angular/core/testing';
import { IVeges, Stores } from 'src/app/veges/veges';
import { VegesService } from './veges.service';
import { of } from 'rxjs';

describe('VegesService', () => {
  let service: VegesService;
  let injector: TestBed;
  let httpMock: HttpTestingController;
  let  veges:any[]=[];
  
  afterEach(() => {
    httpMock.verify();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [VegesService]
    });
    service = TestBed.inject(VegesService);
    injector = getTestBed();
    httpMock = injector.inject(HttpTestingController);

    veges=[
      {
      id: 1,
      name: "tomato",
      stores: Stores.store1,
      price: 10,
      image: "../../assets/images/tomato.jfif",
      qty: 0
      },
      {
      id: 2,
      name: "potato",
      stores: Stores.store4,
      price: 20,
      image: "../../assets/images/potato.jpg",
      qty: 0
      }
    ]
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should getAllVeges',
    inject([HttpTestingController,VegesService],
      (httpMock:HttpTestingController,service:VegesService)=>{
      service.getVeges().subscribe(resp=>expect(veges).toEqual(resp));
      const mockReq = httpMock.expectOne(service.url);
      expect(mockReq.cancelled).toBeFalsy();
      expect(mockReq.request.responseType).toEqual('json');
      mockReq.flush(veges);
    }
  ));
  it('should get vege by id',()=>{
    let response:IVeges;
    let vege ={
      id:4,
      name:"carrot",
      stores:Stores.store1,
      price:30,
      image:"../../assets/images/carroth.jpg",
      qty:0
   };
    const fn=spyOn(service, 'getVegeById').and.returnValue(of(vege));
    service.getVegeById(111).subscribe(res=>{response=res;expect(response).toEqual(vege);});
   expect(fn).toHaveBeenCalled();
});
it('createVege should post veggie and return that new veggie as data',()=>{
  let vege1 ={
    id:3,
    name:"corn",
    stores:Stores.store4,
    price: 10,
    image:"../../assets/images/corn.jpg",
    qty:3
   };
  let vege2 ={
    "id":4,
    "name":"cauliflower",
    "stores":Stores.store4,
    "price": 10,
    "image":"../../assets/images/tomato.jpg",
    "qty":2
   };
  veges =[...veges,vege1];
   service.createVege(vege1).subscribe(resp=>expect(resp).toEqual(vege1) )
   expect(veges.length).toEqual(3);
   const req = httpMock.expectOne(service.url);
   expect(req.request.method).toBe('POST');
   req.flush(vege1);
   });
  
   it('updateVege should update veggie and return updated veggie list',()=>{
    let vege2 ={
      "id":2,
      "name":"baby corn",
      "stores":Stores.store4,
      "price": 10,
      "image":"../../assets/images/tomato.jpg",
      "qty":2
     };
     service.updateVege(vege2).subscribe(resp=>expect(resp).toEqual(vege2) )
     const req = httpMock.expectOne(`${service.url}/${vege2.id}`);
     expect(req.request.method).toBe('PUT');
     req.flush({vege2 });
     })

});
