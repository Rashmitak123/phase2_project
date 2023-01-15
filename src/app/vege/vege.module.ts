import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VegesComponent } from '../veges/veges.component';
import { VegesAddComponent } from '../veges/veges-add.component';
import { VegesRoutingModule } from './vege.routing.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { vegeReducer } from '../state/veges/veges.reducer';
import { VegeEffects } from '../state/veges/veges.effects';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    VegesComponent,
    VegesAddComponent,
],
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule,
    VegesRoutingModule,
    StoreModule.forFeature('veges', vegeReducer),
    EffectsModule.forFeature([VegeEffects]),
    Ng2SearchPipeModule,
],  
})

export class VegesModule { }