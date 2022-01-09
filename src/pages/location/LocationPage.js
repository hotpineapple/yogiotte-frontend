import React from 'react';
import PlaceListContainer from '../../containers/places/PlaceListContainer';
import Header from '../../components/common/Header'
import LocationContainer from '../../containers/location/LocationContainer';

const LocationPage = () => {
    return (
        <>
            <Header />
            <LocationContainer />
            <PlaceListContainer type="location" />
        </>
    );
};

export default LocationPage;