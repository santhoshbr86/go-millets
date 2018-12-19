import { Login } from './login.model';
import { Action } from '@ngrx/store';

export const DO_LOGIN = '[DO LOGIN] login ';
export const DO_LOGIN_SUCCESS = '[LOGIN] Success';
export const DO_LOGIN_FAIL = '[LOGIN] Fail';

export const DO_LOGOUT = '[DO LOGOUT] logout';
export const DO_LOGOUT_SUCCESS = '[DO LOGOUT] success';
export const DO_LOGOUT_FAIL = '[DO LOGOUT] fail';

export class Dologin implements Action {
    readonly type = DO_LOGIN;
    constructor(public payload: any) {}
}

export class Dologinsuccess implements Action {
    readonly type = DO_LOGIN_SUCCESS;
    constructor(public payload: any) {}
}

export class Dologinfail implements Action {
    readonly type = DO_LOGIN_FAIL;
    constructor(public payload: any) {}
}

export class Dologout implements Action {
    readonly type = DO_LOGOUT;
    constructor() {}
}

export class Dologoutsuccess implements Action {
    readonly type = DO_LOGOUT_SUCCESS;
    constructor(public payload: any) {}
}

export class Dologoutfail implements Action {
    readonly type = DO_LOGOUT_FAIL;
    constructor(public payload: any) {}
}

export type loginAction = Dologin | Dologinsuccess | Dologinfail | Dologout | Dologoutsuccess | Dologoutfail;
