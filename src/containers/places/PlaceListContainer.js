import React, { useEffect, useState } from 'react';
import { useInView } from "react-intersection-observer"
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PlaceList from '../../components/places/PlaceList';
import PlaceListMap from '../../components/places/Maps';
import SelectedPlace from '../../components/places/SelectedPlace';
import { listPlaces, initializePlaces } from '../../modules/places';
import { initializeSelectedPlace } from '../../modules/selectedPlaceInMap';
import { initializeKeyword } from '../../modules/keyword';
// import { initializeLimit, changeFieldLimit } from '../../modules/limit';

// PlaceList = forwardRef(PlaceList);

const PlaceListContainer = ({ type, match }) => {
    
    let { category } = match.params;
    if (type === 'mainPage') category = 'hot'; //메인페이지 처리하기 위함

    const dispatch = useDispatch();

    const { places, error, loading, keyword, user, location, selectedPlaceInMap, limit } = useSelector(
        ({ places, loading, user, keyword, location, selectedPlaceInMap }) => ({
            type,
            places: places.places,
            error: places.error,
            keyword: keyword.keyword,
            user: user.user,
            location: location.location,
            selectedPlaceInMap: selectedPlaceInMap.selectedPlaceInMap,
            loading: loading['places/LIST_PLACES'],
            // limit: limit.limit,
        })
        ,
    );
    const onmore = () => {
        // changeFieldLimit(limit + 10);
        // dispatch(listPlaces({ type, category, keyword, location, user, limit: limit + 10 }));
    };  

    useEffect(() => {
        // dispatch(initializePlaces());
        // dispatch(initializeSelectedPlace());
        localStorage.setItem('scroll', 0);
        dispatch(initializeKeyword());
        // dispatch(initializeLoc());
        console.log(page);
        dispatch(listPlaces({ type, category, keyword, location, user, limit: page*10 }));
    }, [type]);

    useEffect(() => {
        // dispatch(initializePlaces());
        dispatch(initializeSelectedPlace());
        // dispatch(initializeKeyword());
        // dispatch(initializeLoc());
        dispatch(listPlaces({ type, category, keyword, location, user, limit: page*10 }));
    }, [dispatch]);

    useEffect(() => {
        // dispatch(initializeLoc());
        dispatch(listPlaces({ type, category, keyword, location, user, limit: page*10 }));
    }, [keyword, location, user]);

    // 무한스크롤
    const [ref, inView] = useInView();
    // ref = React.createRef(); // 확인 필요
    const [page, setPage] = useState(1);
    // const [items, setItems] = useState([]);
    // const [loading, setLoading] = useState(false);

    useEffect(() => {
        // setLoading(true);
        dispatch(listPlaces({ type, category, keyword, location, user, limit: page*10 }));
        // setLoading(false);
    }, [page]);

    // useEffect(() => {
    //     getItems()
    // }, [getItems]);

    useEffect(() => {
        // 사용자가 마지막 요소를 보고 있고, 로딩 중이 아니라면
        if (inView && !loading) {
            // console.log('마지막 요소 보는 중');
            console.log('마지막 스크롤위치');
            console.log(window.scrollY);
            localStorage.setItem('scroll', window.scrollY);
            setPage(prevState => prevState + 1);
        }
    }, [inView, loading]);

    let title = '';
    if (type === 'mainPage') title = '지금 핫한 맛집';
    else if (type === 'search' && keyword) {
        title = `${keyword}의 검색결과`;
    } else if (type === 'location' && location) {
        title = `${location.name}의 맛집`;
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

    // const handleScroll = (e) => {
    //     // const scrollTop = ('scroll', e.srcElement.scrollingElement.scrollTop);
    //     setState({
    //         scrollTop: localStorage.getItem('scroll')
    //     });
    // }
    if (type !== 'location')
        return (
            <PlaceList
                title={title}
                loading={loading}
                error={error}
                places={places}
                onmore={onmore}
                // scrollStart={localStorage.getItem('scroll')}
                ref={ref}
                // onScroll={handleScroll}
            />
        );
    else if (selectedPlaceInMap === '')
        return (
            <PlaceListMap
                title={title}
                loading={loading}
                error={error}
                places={places}
                smaller={selectedPlaceInMap !== ''}
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