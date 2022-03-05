import React from 'react';
import PlaceListContainer from '../../containers/places/PlaceListContainer';
import Header from '../../components/common/Header'

const PlaceListPage = ({ type, match }) => {
    
    if (type === 'mainPage') {
        return (
            <>
                <PlaceListContainer type={type}/>
            </>
        );
    }

    const category = match.params.category;
    // console.log(match.params.category);
    return (
        <>
            <Header />
            <PlaceListContainer type={category}/>
        </>
    );
};

export default PlaceListPage;