import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, { authSaga} from './auth';
import loading from './loading';
import user, { userSaga } from './user';
import places, { placesSaga, } from './places';
import place, { placeSaga } from './place';
import write, {writeSaga } from './write';
import reviews, { reviewsSaga } from './reviews';
import keyword from './keyword';
import location from './location';
import selectedPlaceInMap from './selectedPlaceInMap';
import isSearching from './isSearching';

const rootReducer = combineReducers({
    auth,
    loading,
    user,
    places,
    place,
    write,
    reviews,
    keyword,
    location,
    selectedPlaceInMap,
    isSearching,
});

export function* rootSaga() {
    yield all([authSaga(), userSaga(), placesSaga(), placeSaga(), writeSaga(), reviewsSaga()]);
}

export default rootReducer;