import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as placesAPI from '../lib/api/places';
import { takeLatest } from 'redux-saga/effects';

const [
    LIST_PLACES,
    LIST_PLACES_SUCCESS,
    LIST_PLACES_FAILURE,
] = createRequestActionTypes('places/LIST_PLACES');

export const listPlaces = createAction(
    LIST_PLACES,
    ({category, keyword, location, user}) => ({category, keyword, location, user}) 
);

const listPlacesSaga = createRequestSaga(LIST_PLACES, placesAPI.listPlaces);
export function* placesSaga() {
    yield takeLatest(LIST_PLACES, listPlacesSaga);
}

const initialState = {
    places: null,
    error: null,
};

const places = handleActions(
    {
        [LIST_PLACES_SUCCESS]: (state, { payload: places }) => ({
            ...state,
            error: null,
            places,
        }),
        [LIST_PLACES_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error,
        }),
    },
    initialState
);

export default places;