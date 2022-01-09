import { createAction, handleActions } from 'redux-actions';

const INITIALIZE = 'clickInMap/initialize';
const CHANGE_FIELD = 'clickInMap/CHANGE_FIELD';

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, (data) => (data));

const initialState = {
    selectedPlaceInMap: '',
};

const selectedPlaceInMap = handleActions(
    {
        [INITIALIZE]: () => initialState,
        [CHANGE_FIELD]: (state, { payload: selectedPlaceInMap }) => ({
            ...state,
            selectedPlaceInMap,
        }),
    },
    initialState
);

export default selectedPlaceInMap;