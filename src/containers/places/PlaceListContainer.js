import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PlaceList from '../../components/places/PlaceList';
import PlaceListMap from '../../components/places/Maps';
import SelectedPlace from '../../components/places/SelectedPlace';
import { listPlaces } from '../../modules/places';
import { placeDetail } from '../../modules/place';
import { selectedPlaceInMap } from '../../modules/selectedPlaceInMap'
import { initialize } from '../../modules/selectedPlaceInMap';

const PlaceListContainer = ({ type, match }) => {
    let { category } = match.params;
    if (type === 'mainPage') category = 'hot'; //메인페이지 처리하기 위함

    const dispatch = useDispatch();

    const { places, error, loading, keyword, user, location, selectedPlaceInMap } = useSelector(
        ({ places, loading, user, keyword, location, selectedPlaceInMap }) => ({
            places: places.places,
            error: places.error,
            keyword: keyword.keyword,
            user: user.user,
            location: location.location,
            selectedPlaceInMap: selectedPlaceInMap.selectedPlaceInMap,
            loading: loading['places/LIST_PLACES'],
        })
        ,
    );
        
    useEffect(() => {
        dispatch(initialize());
        dispatch(listPlaces({ category, keyword, location, user }));
    }, [dispatch, keyword, location, user]);

    let title = '';
    if (type === 'mainPage') title = '지금 핫한 맛집';
    else if (type === 'search' && keyword) {
        title = `${keyword}의 검색결과`;
    } else if (type === 'location' && location) {
        title = `${location}의 맛집`;
    } else if (type === 'myplace') {
        title = '찜한 맛집';
    } else {
        switch (category) {
            case 'restaurant':
                title = '레스토랑';
                break;
            case 'cafe':
                title = '카페';
                break;
            case 'bar':
                title = '바';
                break;
            default:
                return '';
        }
    }

    if (type !== 'location')
        return (
            <PlaceList
                title={title}
                loading={loading}
                error={error}
                places={places}
            />
        );
    else if (selectedPlaceInMap === '')
        return (
            <PlaceListMap
                title={title}
                loading={loading}
                error={error}
                places={places}
                smaller={false}
            />
        );
    else
        return (
            <>
                <PlaceListMap
                title={title}
                loading={loading}
                error={error}
                places={places}
                smaller 
                />
                <SelectedPlace place={selectedPlaceInMap}/>
            </>
        )
    
};

export default withRouter(PlaceListContainer);