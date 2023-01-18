import { createReducer, on } from "@ngrx/store";
import { initialState } from "./veges.state";
import { VegesState } from "./veges.state";
import * as VegeActions from './veges.actions'

export const vegeReducer = createReducer<VegesState>(
  //supply the initial stae 
  initialState,
    //"on" method is used to react to the specific action
    //dispatching setCurrentVege 
  on(VegeActions.setCurrentVege, (state, action): VegesState => {
    //return the new state
    return {
      ...state,
      currentVegeId: action.currentVegeId
    };
  }),

  on(VegeActions.clearCurrentVege, (state): VegesState => {
    return {
      ...state,
      currentVegeId: null
    };
  }),

  on(VegeActions.initializeCurrentVege, (state): VegesState => {
    return {
      ...state,
      currentVegeId: 0
    };
  }),

  //Handle successfully loded veges
  on(VegeActions.loadVegesSuccess, (state, action): VegesState => {
    return {
      ...state,
      veges: action.veges,
      error: ''
    };
  }),

  //Handle todo load failure
  on(VegeActions.loadVegesFailure, (state, action): VegesState => {
    return {
      ...state,
      veges: [],
      error: action.error
    };
  }),

  on(VegeActions.updateVegesSuccess, (state, action): VegesState => {
    const updatedVeges = state.veges.map(
      item => action.vege.id === item.id ? action.vege : item);
    return {
      ...state,
      veges: updatedVeges,
      currentVegeId: action.vege.id,
      error: ''
    };
  }),

  on(VegeActions.updateVegeFailure, (state, action): VegesState => {
    return {
      ...state,
      error: action.error
    };
  }),
  
  //after a create the currentVege is the new vege
  on(VegeActions.createVegesSuccess, (state, action): VegesState => {
    return {
      ...state,
      veges: [...state.veges, action.vege],
      currentVegeId: action.vege.id,
      error: ''
    };
  }),

  on(VegeActions.createVegesFailure, (state, action): VegesState => {
    return {
      ...state,
      error: action.error
    };
  }),
  
  //Remove the veggie from the veges array 
  //after delete, the currentVege is null
  on(VegeActions.deleteVegeSuccess, (state, action): VegesState => {
    return {
      ...state,
      veges: state.veges.filter(vege => vege.id !== action.vegeId),
      currentVegeId: null,
      error: ''
    };
  }),

  on(VegeActions.deleteVegeFailure, (state, action): VegesState => {
    return {
      ...state,
      error: action.error
    };
  })
);