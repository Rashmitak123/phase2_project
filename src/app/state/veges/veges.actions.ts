import { createAction, props } from '@ngrx/store';
import { IVeges } from 'src/app/veges/veges';

export const setCurrentVege = createAction(
  '[Vege] Set Current Vege',
  props<{ currentVegeId: number }>()
);

export const clearCurrentVege = createAction(
  '[Vege] Clear Current Vege'
);

export const initializeCurrentVege = createAction(
  '[Vege] Initialize Current Vege'
);

export const loadVeges = createAction(
  '[Vege] Load'
);

export const loadVegesSuccess = createAction(
  '[Vege] Load Success',
  props<{ veges: IVeges[] }>()
);

export const loadVegesFailure = createAction(
  '[Veges] Load Fail',
  props<{ error: string }>()
);

export const updateVeges = createAction(
  '[Veges] Update Vege',
  props<{ vege: IVeges }>()
);

export const updateVegesSuccess = createAction(
  '[Vege] Update Vege Success',
  props<{ vege: IVeges }>()
);

export const updateVegeFailure = createAction(
  '[Vege] Update Vege Fail',
  props<{ error: string }>()
);

export const createVege = createAction(
  '[Vege] Create Vege',
  props<{ vege: IVeges }>()
);

export const createVegesSuccess = createAction(
  '[Vege] Create Vege Success',
  props<{ vege: IVeges }>()
);

export const createVegesFailure = createAction(
  '[Vege] Create Vege Fail',
  props<{ error: string }>()
);

export const deleteVege = createAction(
  '[Vege] Delete Vege',
  props<{ vegeId: number }>()
);

export const deleteVegeSuccess = createAction(
  '[Vege] Delete Vege Success',
  props<{ vegeId: number }>()
);

export const deleteVegeFailure = createAction(
  '[Vege] Delete Vege Fail',
  props<{ error: string }>()
);