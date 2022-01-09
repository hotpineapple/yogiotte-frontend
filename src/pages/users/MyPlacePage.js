import React from 'react';
// import MyPageContainer from '../../containers/auth/MyPageContainer';
import PlaceListContainer from '../../containers/places/PlaceListContainer';
import Header from '../../components/common/Header';

const MyPlacePage = () => {
    return (
        <div>
            <Header />
            <PlaceListContainer type="myplace" />
        </div>
    );
};

export default MyPlacePage;