import { createAction, handleActions } from 'redux-actions';

const INITIALIZE = 'location/initialize';
const CHANGE_FIELD = 'location/CHANGE_FIELD';

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, (data) => (data));

const initialState = {
    location: '',
};

const location = handleActions(
    {
        [INITIALIZE]: () => initialState,
        [CHANGE_FIELD]: (state, { payload: location }) => ({
            ...state,
            location
        }),
    },
    initialState
);

export default location;