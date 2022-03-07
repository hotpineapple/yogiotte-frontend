import { createAction, handleActions } from 'redux-actions';

const INITIALIZE = 'limit/initialize';
const CHANGE_FIELD = 'limit/CHANGE_FIELD';

export const initializeLastPlace = createAction(INITIALIZE);
export const changeFieldLastPlace = createAction(CHANGE_FIELD, (data) => (data));

const initialState = {
    lastPlace: false,
};

const lastPlace = handleActions(
    {
        [INITIALIZE]: () => initialState,
        [CHANGE_FIELD]: (state, { payload: lastPlace }) => ({
            ...state,
            lastPlace
        }),
    },
    initialState
);

export default lastPlace;