import { Injectable } from '@angular/core';
import { mergeMap, map, catchError, concatMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { VegesService } from 'src/shared/veges.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as VegeActions from './veges.actions';

@Injectable()
export class VegeEffects {
  constructor(private actions$: Actions, private vegeService: VegesService) { }

  //run this code when a loadVeges action is dispatched
  loadVeges$ = createEffect(() => {
    //returning action stream of ngrx
    return this.actions$
      .pipe(
        //we are listening of type loadVege
        ofType(VegeActions.loadVeges),
        //call the getVeges method from the service, convert it to an observable
        mergeMap(() => this.vegeService.getVeges()
          .pipe(
            //take the returned value and return a new success action
            map(veges => VegeActions.loadVegesSuccess({ veges })),
            //if it errors.. return a new failure action containing the error
            catchError(error => of(VegeActions.loadVegesFailure({ error })))
          )
        )
      );
  });

  updateVege$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(VegeActions.updateVeges),
        concatMap(action =>
          this.vegeService.updateVege(action.vege)
            .pipe(
              map(vege => VegeActions.updateVegesSuccess({ vege })),
              catchError(error => of(VegeActions.updateVegeFailure({ error })))
            )
        )
      );
  });

  createVege$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(VegeActions.createVege),
        concatMap(action =>
          this.vegeService.createVege(action.vege)
            .pipe(
              map(vege => VegeActions.createVegesSuccess({ vege })),
              catchError(error => of(VegeActions.createVegesFailure({ error })))
            )
        )
      );
  });

  deleteVege$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(VegeActions.deleteVege),
        mergeMap(action =>
          this.vegeService.deleteVege(action.vegeId).pipe(
            map(() => VegeActions.deleteVegeSuccess({ vegeId: action.vegeId })),
            catchError(error => of(VegeActions.deleteVegeFailure({ error })))
          )
        )
      );
  });
}