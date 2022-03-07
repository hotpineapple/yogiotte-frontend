import { createAction, handleActions } from 'redux-actions';

const INITIALIZE = 'search/initialize';
const CHANGE_FIELD = 'search/CHANGE_FIELD';

export const initializeKeyword = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, (data) => (data));

const initialState = {
    keyword: '',
};

const keyword = handleActions(
    {
        [INITIALIZE]: () => initialState,
        [CHANGE_FIELD]: (state, { payload: keyword }) => {
            // console.log(keyword);
            return ({
                ...state,
                keyword
            })
        },
    },
    initialState
);

export default keyword;