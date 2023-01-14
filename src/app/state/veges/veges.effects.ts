import { Injectable } from '@angular/core';
import { mergeMap, map, catchError, concatMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { VegesService } from 'src/shared/veges.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as VegeActions from './veges.actions';

@Injectable()
export class VegeEffects {
  constructor(private actions$: Actions, private vegeService: VegesService) { }

  loadVeges$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(VegeActions.loadVeges),
        mergeMap(() => this.vegeService.getVeges()
          .pipe(
            map(veges => VegeActions.loadVegesSuccess({ veges })),
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