import {
    createSelector,
    select,
    Selector
  } from '@ngrx/store';
import * as fromProductReducers from './products.reducer';

import { getStoreState, StoreState} from '../reducer';

export class ProductsSelector {
    selectCompleteProductState = createSelector(
        getStoreState,
        (state: StoreState) => state.products
    );
    selectCompleteProductStateLoading = createSelector(
        getStoreState,
        (state: StoreState) => state.products.loading
    );
}
