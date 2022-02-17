import { createAction, handleActions } from 'redux-actions';

const INITIALIZE = 'isSearching/initialize';
const CHANGE_FIELD = 'isSearching/CHANGE_FIELD';

export const initialize = createAction(INITIALIZE);
export const changeField2 = createAction(CHANGE_FIELD, (data) => (data));

const initialState = {
    isSearching: false,
};

const isSearching = handleActions(
    {
        [INITIALIZE]: () => initialState,
        [CHANGE_FIELD]: (state, { payload: isSearching }) => ({
            ...state,
            isSearching
        }),
    },
    initialState
);

export default isSearching;