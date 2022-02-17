import React from 'react';
import PlaceListPage from '../../pages/places/PlaceListPage';
import MyPage from '../../pages/users/MyPage';
import { Route } from 'react-router-dom';
import LoginPage from '../../pages/users/LoginPage';
import RegisterPage from '../../pages/users/RegisterPage';
import HomePage from '../../pages/home/HomePage';
import PlaceDetailPage from '../../pages/places/PlaceDetailPage';
import ReviewWritePage from '../../pages/review/ReviewWritePage';
import ReviewListPage from '../../pages/review/ReviewListPage';
import SearchPage from '../../pages/search/SearchPage';
import LocationPage from '../../pages/location/LocationPage';
import MyInfoPage from '../../pages/users/MyInfoPage';
import MyPlacePage from '../../pages/users/MyPlacePage';
import MyReviewPage from '../../pages/users/MyReviewPage';

function Main() {
    return (
        <>
        <Route component={HomePage} path={'/'} exact />
        <Route component={MyPage} path={'/mypage'} exact />
        <Route component={LoginPage} path={'/login'} />
        <Route component={RegisterPage} path={'/register'} />
        <Route component={PlaceListPage} path={'/places/:category'} />
        <Route component={PlaceDetailPage} path={'/place/:pid'} />
        <Route component={ReviewWritePage} path={'/write'} />
        <Route component={ReviewListPage} path={'/reviews/:rid'} />
        <Route component={SearchPage} path={'/search'} />
        <Route component={LocationPage} path={'/location'} />  
        <Route component={MyInfoPage} path={'/myinfo'} />  
        <Route component={MyPlacePage} path={'/myplace'} />
        <Route component={MyReviewPage} path={'/myreview'} />  
        </>
    );
}

export default Main;