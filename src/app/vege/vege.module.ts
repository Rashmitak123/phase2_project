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

@NgModule({
  declarations: [
    VegesComponent,
    VegesAddComponent,
],
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule,
    VegesRoutingModule,
    StoreModule.forFeature('veges', vegeReducer),
    EffectsModule.forFeature([VegeEffects])
],  
})

export class VegesModule { }