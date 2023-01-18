
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
      qty: 0,
      total:0
      },
      {
      id: 2,
      name: "potato",
      stores: Stores.store4,
      price: 20,
      image: "../../assets/images/potato.jpg",
      qty: 0,
      total: 0
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
      qty:0,
      total:0
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
    qty:3,
    total:0
   };
  let vege2 ={
    "id":4,
    "name":"cauliflower",
    "stores":Stores.store4,
    "price": 10,
    "image":"../../assets/images/tomato.jpg",
    "qty":2,
    "total":0
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
      "qty":2,
      "total":0
     };
     service.updateVege(vege2).subscribe(resp=>expect(resp).toEqual(vege2) )
     const req = httpMock.expectOne(`${service.url}/${vege2.id}`);
     expect(req.request.method).toBe('PUT');
     req.flush({vege2 });
     })

});
