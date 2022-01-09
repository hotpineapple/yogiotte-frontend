import React from 'react';
import PlaceListContainer from '../../containers/places/PlaceListContainer';
import Header from '../../components/common/Header'

const PlaceListPage = ({ type }) => {
    if (type === 'mainPage') {
        return (
            <>
                <PlaceListContainer type={type}/>
            </>
        );
    }
    return (
        <>
            <Header />
            <PlaceListContainer type={type}/>
        </>
    );
};

export default PlaceListPage;