import { createAction, handleActions } from 'redux-actions';

const INITIALIZE = 'location/initialize';
const CHANGE_FIELD = 'location/CHANGE_FIELD';

export const initializeLoc = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, (data) => (data));

const initialState = {
    name: '',
    code: '',
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