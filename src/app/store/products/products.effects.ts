import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import * as fromAction from './products.action';
import { of } from 'rxjs';
import { switchMap, map, catchError, } from 'rxjs/operators';
import * as fromService from '../../services/products.service';
@Injectable()
export class ProductEffects {
 constructor(private action$: Actions, private pservice: fromService.ProductsService) {}
 @Effect()
 getProducts$ = this.action$.ofType(fromAction.GET_PRODUCTS).pipe(
     switchMap(() => {
        return this.pservice.getProducts().pipe(
            map((data: any) => new fromAction.GetProductsActionSuccess(data)),
            catchError(error => of(new fromAction.GetProductsActionfail(error))));
     }));
}
