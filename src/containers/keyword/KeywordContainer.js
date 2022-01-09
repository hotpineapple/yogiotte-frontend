import React, { useEffect, useCallback } from 'react';
import SearchInput from '../../components/search/SearchInput';
import { useSelector, useDispatch } from 'react-redux';
import { changeField, initialize } from '../../modules/keyword';

const KeywordContainer = () => { 
    const dispatch = useDispatch();
    const { keyword } = useSelector(({ keyword }) =>  ({ keyword: keyword.keyword }));
    const onChangeField = useCallback(payload => dispatch(changeField(payload)), [dispatch]);

    useEffect(() => {
        return () => {
            dispatch(initialize());
        };
    }, [dispatch]);
    
    return (
        <SearchInput onChangeField={onChangeField} keyword={keyword} />
    );
}

export default KeywordContainer;