import { createAction, handleActions } from 'redux-actions';
import { takeLatest, call } from 'redux-saga/effects';
import * as authAPI from '../lib/api/auth';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';

const TEMP_SET_USER = 'user/TEMP_SET_USER';
const [LOGIN_CHECK, LOGIN_CHECK_SUCCESS, LOGIN_CHECK_FAILURE] = createRequestActionTypes('user/LOGIN_CHECK');
const LOGOUT = 'user/LOGOUT';

export const tempSetUser = createAction(TEMP_SET_USER, user => user);
export const loginCheck = createAction(LOGIN_CHECK);
export const logout = createAction(LOGOUT);

// const tempSetSaga = createRequestSaga(TEMP_SET_USER, );
const checkSaga = createRequestSaga(LOGIN_CHECK, authAPI.isLogin);

function checkFailureSaga() {
    try {
        localStorage.removeItem('user');
    } catch (e) {
        console.log('local storage is not working.');
    }
}

function* logoutSaga() {
    try {
        yield call(authAPI.logout);
        localStorage.removeItem('user');
    } catch (e) {
        console.log(e);
    }
}

export function* userSaga() {
    // yield takeLatest(TEMP_SET_USER, tempSetSaga);
    yield takeLatest(LOGIN_CHECK, checkSaga);
    yield takeLatest(LOGIN_CHECK_FAILURE, checkFailureSaga);
    yield takeLatest(LOGOUT, logoutSaga);
}

const initialState = {
    user: null,
    loginCheckError: null,
};

export default handleActions(
    {
        [TEMP_SET_USER]: (state, { payload: user }) => ({
            ...state,
            user,
        }),
        [LOGIN_CHECK_SUCCESS]: (state, { payload: user }) => ({
            ...state,
            user,
            loginCheckError: null,
        }),
        [LOGIN_CHECK_FAILURE]: (state, { payload: error }) => ({
            ...state,
            user: null,
            loginCheckError: error,
        }),
        [LOGOUT]: state => ({
            ...state,
            user: null,
        })
    },
    initialState,
)