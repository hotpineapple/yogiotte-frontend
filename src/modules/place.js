import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as placesAPI from '../lib/api/places';
import { takeLatest } from 'redux-saga/effects';

const [
    PLACE_DETAIL,
    PLACE_DETAIL_SUCCESS,
    PLACE_DETAIL_FAILURE,
] = createRequestActionTypes('place/PLACE_DETAIL');

export const placeDetail = createAction(
    PLACE_DETAIL,
    ({ pid }) => ({ pid })  
);

const placeDetailSaga = createRequestSaga(
    PLACE_DETAIL,
    placesAPI.placeDetail
);

export function* placeSaga() {
    yield takeLatest(PLACE_DETAIL, placeDetailSaga);
}

const initialState = {
    place: null,
    error: null,
};

const place = handleActions(
    {
        [PLACE_DETAIL_SUCCESS]: (state, { payload: place }) => ({
            ...state,
            place,
        }),
        [PLACE_DETAIL_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error,
        }),
    },
    initialState
);

export default place;