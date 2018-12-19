import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromProduct from './products';
import * as fromLogin from './login';

export interface StoreState {
login: fromLogin.LoginState;
products: fromProduct.ProductState;
}

export const storeReducers: ActionReducerMap<any> = {
products: fromProduct.reducer,
login: fromLogin.loginReducer
};

export const getStoreState = createFeatureSelector<StoreState>('mainstore');

// Product status

export const getProductState = createSelector(getStoreState, (state: StoreState) => state.products);

export const getAllProducts = createSelector(getProductState, fromProduct.getProducts);
export const getProductloading = createSelector(getProductState, fromProduct.getProductsloading);
export const getProductloaded = createSelector(getProductState, fromProduct.getProductsloaded);

// Loging status

export const getLoginState = createSelector(getStoreState, (state: StoreState) => state.login);

export const getloginDetails = createSelector(getLoginState, fromLogin.doLogin);
// export const getloging = createSelector(getLoginState, fromLogin.doLoginloading);
// export const getlogged = createSelector(getLoginState, fromLogin.doLoginloaded);
export const getisloggedIn = createSelector(getLoginState, fromLogin.isLoggedIn);

export const metaReducers: MetaReducer<StoreState>[] = !environment.production ? [] : [];
