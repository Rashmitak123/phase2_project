import { Component, EventEmitter, Output } from '@angular/core';
import { OnInit, OnDestroy} from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { State } from 'src/app/state/veges/veges.state';
import { Observable, Subscription } from 'rxjs';
import { VegesService } from 'src/shared/veges.service';
import { IVeges } from './veges';
import { getCurrentVege, getError, getVeges } from '../state/veges/veges.selectors';
import * as VegeActions from 'src/app/state/veges/veges.actions';
import { CartService } from 'src/shared/cart.service';
//import { CartService } from 'src/shared/cart.service';

@Component({
  selector: 'app-veges',
  templateUrl: './veges.component.html',
  styleUrls: ['./veges.component.css']
})
export class VegesComponent implements OnInit, OnDestroy{

  errorMessage: string='';
  sub!: Subscription;
  vege!: IVeges;
  veges: IVeges[]=[];
  filteredVeges: IVeges[]=[];
  selectedVeges!: IVeges | null;
  filterValue:any;
  href: string='';

  //declared below are observables for which we will use async pipe in template, no sub/unsub
  veges$!:Observable<IVeges[]>;
  selectedVeges$!:Observable<any>;
  errorMessage$!: Observable<string>;

  dataReceived=this.vegeService.getVeges();
  obsVeges$!: Observable<IVeges>;

   constructor(private vegeService:VegesService,
         private cartService:CartService,
         private router:Router,
         private store:Store<State>){}
  
  ngOnInit(): void {
    this.href=this.router.url;
    //will get initial values until the load is complete]
    this.veges$=this.store.select(getVeges);
    this.veges$.subscribe(resp=>this.filteredVeges=resp);
    this.errorMessage$=this.store.select(getError);
    this.store.dispatch(VegeActions.loadVeges());
    this.selectedVeges$=this.store.select(getCurrentVege);
    this.filteredVeges=this.veges;  
  }

  ngOnDestroy(): void {
    
  }

  newVege():void{
    //back to new veggie from service
    this.store.dispatch(VegeActions.initializeCurrentVege());
    this.router.navigate([this.href, 'addVege']);
  }
  
  vegeSelected(vege:IVeges):void{
    this.store.dispatch(VegeActions.setCurrentVege({currentVegeId:vege.id}));
  }

  getVegeById(id:number):IVeges{
    this.vegeService.getVegeById(id).subscribe(resp=>this.vege=resp);
    return this.vege;
  }

  addtocart(item: IVeges){
    this.cartService.addtoCart(item);
  }

}
