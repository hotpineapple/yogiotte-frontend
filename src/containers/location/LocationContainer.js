/* global kakao */
import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeField } from '../../modules/location';
// import { changeField2, initialize } from '../../modules/isSearching';
import LocationInput from '../../components/location/LocationInput';
import LocationSelector from '../../components/location/LocationSelector';

const { kakao } = window;

const LocationContainer = () => {
    const dispatch = useDispatch();
    const { location } = useSelector(({ location }) => ({ location: location.location }));

    var geocoder = new kakao.maps.services.Geocoder();

    const onChangeField = useCallback(name => dispatch(changeField(
            {
                name,
                code: geocoder.addressSearch(name, (result, status) => {
                    if (status === kakao.maps.services.Status.OK) return result[0].code;
                    else return 0;
                }),
            })));
    
    // const onChangeField2 = useCallback(payload => dispatch(changeField2(payload)), [dispatch]);
    
    useEffect(() => {
        // return () => {
            // dispatch(initialize());

            navigator.geolocation.getCurrentPosition(
                (data) => {
                    
                    geocoder.coord2RegionCode(
                        data.coords.longitude,
                        data.coords.latitude,
                        res => {
                            dispatch(changeField({ name: res[0].address_name, code: res[0].code }));
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
        // };
    }, [dispatch]);

    return (
        <>
            {/* <LocationInput onChangeField={onChangeField} onChangeField2={onChangeField2} location={location} isSearching={isSearching}/>
            {isSearching ?
                (
                    <LocationSelector onChangeField={onChangeField} />
            ): (
                    <></>
                )
            } */}
        </>
    );
}

export default LocationContainer;