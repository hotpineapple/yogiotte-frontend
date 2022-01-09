import React from 'react';
import PlaceListContainer from '../../containers/places/PlaceListContainer';
import Header from '../../components/common/Header'
import KeywordContainer from '../../containers/keyword/KeywordContainer';

const SearchPage = () => {
    return (
        <>
            <Header />
            <KeywordContainer />
            <PlaceListContainer type="search" />
        </>
    );
};

export default SearchPage;