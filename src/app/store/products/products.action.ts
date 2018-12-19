import { Product } from './products.model';
import { Action } from '@ngrx/store';

export const GET_PRODUCTS = '[PRODUCTS] CALL ';
export const GET_PRODUCTS_SUCCESS = '[PRODUCTS] Success';
export const GET_PRODUCTS_FAIL = '[PRODUCTS] Failure';

export class GetProductsAction implements Action {
    readonly type = GET_PRODUCTS;
    constructor() {}
}

export class GetProductsActionSuccess implements Action {
    readonly type = GET_PRODUCTS_SUCCESS;
    constructor(public payload: Product[]) {}
}

export class GetProductsActionfail implements Action {
    readonly type = GET_PRODUCTS_FAIL;
    constructor(public payload: any) {}
}

export type productAction = GetProductsAction | GetProductsActionSuccess | GetProductsActionfail;
