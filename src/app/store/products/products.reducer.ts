import { Product } from './products.model';
import { InitialState } from '@ngrx/store/src/models';
import * as fromProducts from './products.action';
export interface ProductState {
    data: Product[];
    loaded: boolean;
    loading: boolean;
}

export const intialState: ProductState = {
    data: [
        {
            id: 1,
            title: 'From root',
            content: 'comming soon',
            cat: 'areca',
            type: 'plates'
        }
    ],
    loaded: true,
    loading: false
};

export function reducer(state = intialState, action: fromProducts.productAction): ProductState {
    switch (action.type) {
        case fromProducts.GET_PRODUCTS: {
            return {...state, loading: true};
        }
        case fromProducts.GET_PRODUCTS_SUCCESS: {
            const data = action.payload;
            console.log(data);
            return {...state, loading: false, loaded: true, data};
        }
        case fromProducts.GET_PRODUCTS_FAIL: {
            return {...state, loading: false, loaded: false};
        }
        default: return state;
    }
}

export const getProducts = (state: ProductState) => state.data;
export const getProductsloading = (state: ProductState) => state.loading;
export const getProductsloaded = (state: ProductState) => state.loaded;
