import { createFeatureSelector, createSelector, createReducer, on } from '@ngrx/store';
import { Stores } from 'src/app/veges/veges';
import * as AppState from '../../state/app.state';
import { initialState } from './veges.state';
import { VegesState } from './veges.state';

const getVegeFeatureState = createFeatureSelector<VegesState>('veges');

export const getCurrentVegeId = createSelector(
  getVegeFeatureState,
  state => state.currentVegeId
);

export const getCurrentVege = createSelector(
  getVegeFeatureState,
  getCurrentVegeId,
  (state, currentVegeId) => {
    if (currentVegeId === 0) {
      return {
        id:0,
        name:'',
        stores:Stores.store1,
        price:0,
        image:'',
        qty:0,
        total:0
      };
    } else {
      return currentVegeId ? state.veges.find(v => v.id === currentVegeId) : null;
    }
  }
);

export const getVeges = createSelector(
  getVegeFeatureState,
  state => state.veges
);

export const getError = createSelector(
  getVegeFeatureState,
  state => state.error
);