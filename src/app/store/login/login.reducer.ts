import { Login } from './login.model';
import { InitialState } from '@ngrx/store/src/models';
import * as fromaction from './login.action';
export interface LoginState {
    user: Login;
    loggedIn: boolean;
}

const intialState: LoginState = {
    user: {
        username: null,
        password: null
    },
    loggedIn: false
};

export function loginReducer(state = intialState, action: fromaction.loginAction): LoginState {
    switch (action.type) {
        case fromaction.DO_LOGIN: {
            return {...state, loggedIn: false};
        }
        case fromaction.DO_LOGIN_SUCCESS: {
            const data = action.payload;
            console.log(data);
            return {...state, loggedIn: true};
        }
        case fromaction.DO_LOGIN_FAIL: {
            return {...state, loggedIn: false};
        }
        // case fromaction.DO_LOGOUT: {
        //     return {...state, loggedIn: true};
        // }
        case fromaction.DO_LOGOUT_SUCCESS: {
            return {...state, loggedIn: false};
        }
        case fromaction.DO_LOGOUT_FAIL: {
            return {...state, loggedIn: false};
        }
        default: return state;
    }
}

export const doLogin = (state: LoginState) => state;
export const isLoggedIn = (state: LoginState) => state.loggedIn;
