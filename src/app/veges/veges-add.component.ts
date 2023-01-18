import { Component,OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { deleteVege } from '../state/veges/veges.actions';
import { getCurrentVege } from '../state/veges/veges.selectors';
import { State } from '../state/veges/veges.state';
import { Observable, Subscription, tap } from 'rxjs';
import { GenericValidator } from 'src/shared/genericvalidator';
import { Stores, IVeges } from './veges';
import * as VegeActions from '../state/veges/veges.actions'
import { VegesService } from 'src/shared/veges.service';

@Component({
  selector: 'app-veges-add',
  templateUrl: './veges-add.component.html',
  styleUrls: ['./veges-add.component.css']
})
export class VegesAddComponent implements OnInit, OnDestroy {
  pageTitle='Edit Veges';
  errorMessage='';
  vege$!: Observable<IVeges | null | undefined  >;
  addVege!: FormGroup;
  vege!:IVeges | null | undefined;
  sub!:Subscription;
  displayMessage: {[key:string]:string}={};
    
    private validationMessages!:{[key:string]:{[key:string]:string}};
    private genericValidator!:GenericValidator;

    constructor(private store:Store<State>,
              private formBuilder: FormBuilder,
              private router: Router,
              private vegeService:VegesService ) {

      this.validationMessages={
      name:{
        required:'Veggie name is required ',
        minLength:'Veggie name must have 3 characters',
        maxLength:'Veggie name must have less than  equal to 10 chars'
      },
      stores:{
        required:'Store is required'
      },
      price:{
        required:'Price is required'
      },image:{
        required:'Image is required'
      }
      };
      
      this.genericValidator=new GenericValidator(this.validationMessages);
}

ngOnDestroy(): void {

   }

ngOnInit() {
  this.addVege = this.formBuilder.group({
    id: [],
    name: ['',[ Validators.required,Validators.minLength(3),Validators.maxLength(10)]],
    stores:[Stores.store1,[Validators.required]],
    price:['',[Validators.required]],
    image:['',[Validators.required]],
     });
 
     //watch for changes to the currently selected veggie
     this.vege$ = this.store.select(getCurrentVege)
       .pipe(
         tap(currentVege => this.displayVege(currentVege))
       );
  this.vege$.subscribe(resp=>this.vege=resp);
  //watch for the value changes for validation
  this.addVege.valueChanges.subscribe(
       () => this.displayMessage =
       this.genericValidator.processMessages(this.addVege)
     );
 
     //when the vege is selected from the vege list, it should be desplayed on the form
     this.addVege.valueChanges
     .subscribe(()=>this.displayMessage=this.genericValidator.processMessages(this.addVege));
   }

   get id(){
     return this.addVege.get("id");
   }
 
   get name(){
     return this.addVege.get("name");
     }
 
   get image(){
     return this.addVege.get("image");
    }

   get price(){
     return this.addVege.get("price");
   }

   get stores(){
       return this.addVege.get("stores");
   }
 
   //to render the selected product on the form
   displayVege(vegeParam:IVeges |null |undefined):void{
    this.vege = vegeParam;
    if(this.vege){
      //reset the form to its original
     this.addVege.reset();
     if(this.vege.id==0){
       this.pageTitle='Add Veggie';
     }
     else{
       this.pageTitle=`Edit Veggie: ${this.vege.name}`;
     }
 
   //update the data on the form
  this.addVege.patchValue({
  id:this.vege.id,
  name:this.vege.name,
  image:this.vege.image,
  price:this.vege.price,
  stores:this.vege.stores
  })
  }
}

  saveVege(originalVege:IVeges):void{
     if(this.addVege.valid){
       if(this.addVege.dirty){
        //we are copying data from the form
        //it ensures that values are not lost, ids are retained
         const vege={...originalVege,...this.addVege.value};
       if(vege.id==0){
         this.store.dispatch(VegeActions.createVege({vege}));
      }
      else{
        this.store.dispatch(VegeActions.updateVeges({ vege }));
      }
   }

     this.router.navigate(['veges'])
 }
}

//validating on blur, if user tabs out throught the form fields
   blur():void{
   this.displayMessage=this.genericValidator.processMessages(this.addVege);
   }
 
   deleteVege(vege:IVeges):void{
     if(vege && vege.id){
       if(confirm(`Are you sure you want to delete ${vege.name} details`)){
         this.store.dispatch(VegeActions.deleteVege({ vegeId: vege.id }));
       }
       else{
        this.store.dispatch(VegeActions.clearCurrentVege());
       }
     }
   }
}
