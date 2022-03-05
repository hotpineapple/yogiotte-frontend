import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { takeLatest, call } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as authAPI from '../lib/api/auth';

const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';

const [REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE] = createRequestActionTypes('auth/REGISTER');
const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestActionTypes('auth/LOGIN');
const [EDIT, EDIT_SUCCESS, EDIT_FAILURE] = createRequestActionTypes('auth/EDIT');
const [LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAILURE] = createRequestActionTypes('auth/LOGOUT');

export const changeField = createAction(
    CHANGE_FIELD,
    ({ form, key, value}) => ({
        form,
        key,
        value
    }),
);

export const initializeForm = createAction(
    INITIALIZE_FORM, form => form
);

// export const sampleAction = createAction(SAMPLE_ACITON);

export const register = createAction(REGISTER, ({ username, password }) => ({
    username,
    password
}));

export const login = createAction(LOGIN, ({ username, password }) => ({
    username,
    password,
}));

export const logout = createAction(LOGOUT);

export const editInfo = createAction(EDIT, ({ username, password }) => ({
    username,
    password,
}));

const registerSaga = createRequestSaga(REGISTER, authAPI.register);
const loginSaga = createRequestSaga(LOGIN, authAPI.login);
const editSaga = createRequestSaga(LOGIN, );
const logoutSaga = createRequestSaga(LOGIN, authAPI.logout);

export function* authSaga() {
    yield takeLatest(REGISTER, registerSaga);
    yield takeLatest(LOGIN, loginSaga);
    // yield takeLatest(LOGIN, editSaga);
    yield takeLatest(LOGOUT, logoutSaga);
}

const initialState = {
    register: {
        username: '',
        password: '',
        passwordConfirm: '',
    },
    login: {
        username: '',
        password: '',
    },
    auth: null,
    authError: null,
    loginUserId: '',
};

const auth = handleActions(
    {
        [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
            produce(state, draft => {
                draft[form][key] = value;
            }),
        [INITIALIZE_FORM]: (state, { payload: form }) => ({
            ...state,
            [form]: initialState[form],
            authError: null,
        }),
        [REGISTER_SUCCESS]: (state, { payload: auth }) => ({
            ...state,
            authError: null,
            auth,
        }),
        [REGISTER_FAILURE]: (state, { payload: error }) => ({
            ...state,
            authError: error,
        }),
        [LOGIN_SUCCESS]: (state, { payload: res }) => {
            console.log('res');
            console.log(res);
            return ({
                ...state,
                authError: null,
                auth: res.auth,
                loginUserId: res.userId,
            })
        },
        [LOGIN_FAILURE]: (state, { payload: error }) => ({
            ...state,
            authError: error,
        }),
        [LOGOUT_SUCCESS]: (state, { payload: res }) => {
            console.log('res');
            console.log(res);
            return ({
                ...state,
                authError: null,
                auth: res.auth,
                loginUserId: '',
            });
        },
        [LOGOUT_FAILURE]: (state, { payload: error }) => {
            return ({
                ...state,
                authError: error,
        });
        }
    },
    initialState,
);

export default auth;
