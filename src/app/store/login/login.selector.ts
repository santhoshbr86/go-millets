import {
    createSelector,
    select,
    Selector
  } from '@ngrx/store';
import * as fromProductReducers from './login.reducer';

import { getStoreState, StoreState} from '../reducer';

export class LoginSelector {
    selectCompleteLoginState = createSelector(
        getStoreState,
        (state: StoreState) => state.login
    );
    selectCompleteProductStateLoading = createSelector(
        getStoreState,
        (state: StoreState) => state.products.loading
    );
}
