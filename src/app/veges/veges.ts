export enum Stores{
    store1="Store 1",
    store2="Store 2",
    store3="Store 3",
    store4="Store 4",
    store5="Store 5"
}


export interface IVeges{
    id:number;
    name:string;
    price:number;
    stores:Stores;
    image:string;
    qty:number;
    total:number;

}