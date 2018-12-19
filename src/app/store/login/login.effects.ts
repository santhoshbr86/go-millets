import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import * as fromAction from './login.action';
import { of } from 'rxjs';
import { switchMap, map, catchError, } from 'rxjs/operators';
import * as fromService from '../../services/login.service';
@Injectable()
export class LoginEffects {
 constructor(private action$: Actions, private logservice: fromService.LoginService) {}
//  @Effect()
//  doLogin$ = this.action$.ofType(fromAction.DO_LOGIN).pipe(
//      switchMap((action: any) => {
//         return this.logservice.dologin(action.payload).pipe(
//             map((data: any) => {
//                 window.localStorage.setItem('userToken', data.auth_token);
//                 return new fromAction.Dologinsuccess(data);
//             }),
//             catchError(error => of(new fromAction.Dologinfail(error))));
//      }));
}
