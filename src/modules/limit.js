import { createAction, handleActions } from 'redux-actions';

const INITIALIZE = 'limit/initialize';
const CHANGE_FIELD = 'limit/CHANGE_FIELD';

export const initializeLimit = createAction(INITIALIZE);
export const changeFieldLimit = createAction(CHANGE_FIELD, (data) => (data));

const initialState = {
    limit: 100,
};

const limit = handleActions(
    {
        [INITIALIZE]: () => initialState,
        [CHANGE_FIELD]: (state, { payload: limit }) => ({
            ...state,
            limit
        }),
    },
    initialState
);

export default limit;