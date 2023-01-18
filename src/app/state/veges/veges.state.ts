import { IVeges } from "src/app/veges/veges";
import * as AppState from '../../state/app.state';

//Extends the app state to include the veggie feature
//this is required because the veges are lazy loaded
//so the reference to VegesState can't be added to app.state.ts directly
export interface State extends AppState.State {
  veges: VegesState;
}
export interface VegesState{
  currentVegeId:number | null;
  veges:IVeges[];
  error:string;
}

export const initialState:VegesState={
  currentVegeId:null,
  veges:[],
  error:''
}