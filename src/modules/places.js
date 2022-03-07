import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as placesAPI from '../lib/api/places';
import { takeLatest } from 'redux-saga/effects';

const INITIALIZE = 'places/initialize';

const [
    LIST_PLACES,
    LIST_PLACES_SUCCESS,
    LIST_PLACES_FAILURE,
] = createRequestActionTypes('places/LIST_PLACES');

export const initializePlaces = createAction(INITIALIZE);

export const listPlaces = createAction(
    LIST_PLACES,
    ({ type, category, keyword, user, location, limit }) => ({ type, category, keyword, user, location, limit }) 
);

const listPlacesSaga = createRequestSaga(LIST_PLACES, placesAPI.listPlaces);


export function* placesSaga() {
    yield takeLatest(LIST_PLACES, listPlacesSaga);

}

const initialState = {
    places: [],
    error: null,
};

const places = handleActions(
    {
        [INITIALIZE]: () => initialState,
        [LIST_PLACES_SUCCESS]: (state, { payload: res }) => {
            console.log(state.places);
            if (res.more) {
                console.log(res.more);
                console.log('두페이지~~');
                return ({
                    ...state,
                    error: null,
                    places: state.places.concat(res.places), // 확인 필요
                });
            } else {
                console.log('첫페이지');
                return ({
                    ...state,
                    error: null,
                    places: res.places,
                });
            }
        },
        [LIST_PLACES_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error,
        }),

    },
    initialState
);

export default places;