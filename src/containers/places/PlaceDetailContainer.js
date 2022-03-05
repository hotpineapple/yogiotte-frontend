import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PlaceDetail from '../../components/places/PlaceDetail';
import { placeDetail } from '../../modules/place';

const PlaceDetailContainer = ({ match }) => {
    let id = match.params.id;
    // console.log(`id:${id}`);
    const dispatch = useDispatch();
    const { place, error, loading } = useSelector(
        ({ place, loading }) => {
            return {
                place: place.place,
                error: place.error,
                loading: loading['place/PLACE_DETAIL']
            };
        },
    );
    
    useEffect(() => {
        dispatch(placeDetail({ id }));
    }, [dispatch]);

    return (
        <PlaceDetail
            loading={loading}
            error={error}
            place={place}
        />
    );
};

export default withRouter(PlaceDetailContainer);