import { IVeges } from "src/app/veges/veges";
import * as AppState from '../../state/app.state';

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