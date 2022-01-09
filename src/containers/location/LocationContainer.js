/* global kakao */
import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeField, initialize } from '../../modules/location';
import LocationInput from '../../components/location/LocationInput';

const { kakao } = window;

const LocationContainer = () => { 
    const dispatch = useDispatch();
    const { location } = useSelector(({location}) =>  ({ location: location.location }));

    const onChangeField = useCallback(payload => dispatch(changeField(payload)), [dispatch]);
    
    useEffect(() => {
        return () => {
            dispatch(initialize());
            navigator.geolocation.getCurrentPosition(
                (data) => {
                    var geocoder = new kakao.maps.services.Geocoder();
                    geocoder.coord2RegionCode(
                        data.coords.longitude,
                        data.coords.latitude,
                        res => {
                            dispatch(changeField(res[1].address_name));
                        }
                    );   
                },
                (e) => { console.warn(e); },
                {
                    enableHighAccuracy: true,
                    maximumAge: Infinity,
                    // interval: Infinity,
                    // timeout: 27000
                }
            );
        };
    }, [dispatch]);

    return (
        <LocationInput onChangeField={onChangeField} location={location} />
    );
}

export default LocationContainer;