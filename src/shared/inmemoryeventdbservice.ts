import { Injectable } from "@angular/core";
import { InMemoryDbService, RequestInfo } from "angular-in-memory-web-api";
import { Observable } from "rxjs";
import { User } from "src/app/user/user";
import { IVeges, Stores } from "src/app/veges/veges";

@Injectable({providedIn:'root'})
export class InMemoryEventDbService implements InMemoryDbService{

    createDb(){

      const veges:IVeges[]=[{
        "id":111,
        "name":"Tomatos",
        "price":10,
        "stores":Stores.store1,
        "image":"../../assets/images/tomato.jfif",
        "qty":1
       },
      {
        "id":112,
        "name":"Potatos",
        "price":30,
        "stores":Stores.store4,
        "image":"../../assets/images/potato.jpg",
        "qty":1
    },
    {
        "id":113,
        "name":"Carrot",
        "price":35,
        "stores":Stores.store3,
        "image":"../../assets/images/carrot.jfif",
        "qty":1
    },
    {
        "id":114,
        "name":"Broccoli",
        "price":80,
        "stores":Stores.store5,
        "image":"../../assets/images/brocolli.jpg",
        "qty":1
    },
    {
        "id":115,
        "name":"Cauliflower",
        "price":20,
        "stores":Stores.store1,
        "image":"../../assets/images/cauliflower.jfif",
        "qty":1
    },
    {
        "id":116,
        "name":"Corn",
        "price":40,
        "stores":Stores.store4,
        "image":"../../assets/images/corn.jpg",
        "qty":1
    },
    {
        "id":117,
        "name":"Cucumber",
        "price":50,
        "stores":Stores.store2,
        "image":"../../assets/images/cucumber.jpeg",
        "qty":1
    }];

    const users:User[]=[{ 
        id:1,
        userName:'admin',
        password:'admin',
        isAdmin:true
      },

        { 
          id:2,
          userName:'rashmi',
          password:'rashmi',
          isAdmin:false
        },

          { 
            id:3,
            userName:'dev',
            password:'dev',
            isAdmin:false
        }];
      return  {veges, users};
    }}

