/* global kakao */
import React, { useEffect } from "react";
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import { useDispatch } from 'react-redux';
import { initializeSelectedPlace, changeField } from '../../modules/selectedPlaceInMap';

const { kakao } = window;

const MapBlock = styled(Responsive)`
    // margin-top: 0.5rem;
`;

const MapContentBlock = styled.div`
    // padding-top: 0.5rem;
    padding-bottom: 1rem;
`;

const Maps = ({ places, title, smaller }) => {
    
    const dispatch = useDispatch();

    useEffect(() => {
        let container = document.getElementById("map");

        let options = {
            // center: new kakao.maps.LatLng(37.36892446719013, 127.10183457696866),
            center: new kakao.maps.LatLng(places[0].lat, places[0].lng),
            level: 5,
        };

        var map = new kakao.maps.Map(container, options);
        // map.setDraggable(true);
        // map.setZoomable(true);
        
        // console.log("loading kakaomap");
        // var positions = [
        //     {
        //         id: 1,
        //         title: '카카오', 
        //         latlng: new kakao.maps.LatLng(33.450705, 126.570677),
        //         category: '레스토랑',
        //     },
        //     {
        //         id: 2,
        //         title: '생태연못', 
        //         latlng: new kakao.maps.LatLng(33.450936, 126.569477),
        //         category: '레스토랑',
        //     },
        //     {
        //         id: 3,
        //         title: '텃밭', 
        //         latlng: new kakao.maps.LatLng(33.450879, 126.569940),
        //         category: '바',
        //     },
        //     {
        //         id: 4,
        //         title: '근린공원',
        //         latlng: new kakao.maps.LatLng(33.451393, 126.570738),
        //         category: '카페',
        //     }
        // ];
        
        const imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; 
    
        for (let i = 0; i < places.length; i++) {
            
            // 마커 이미지의 이미지 크기 입니다
            const imageSize = new kakao.maps.Size(24, 35); 
            
            // 마커 이미지를 생성합니다    
            const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 
            
            // 마커를 생성합니다
            var marker = new kakao.maps.Marker({
                map: map, // 마커를 표시할 지도
                position: new kakao.maps.LatLng(places[i].lat,places[i].lng), // 마커를 표시할 위치
                title : places[i].name, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
                image: markerImage, // 마커 이미지
                id: places[i].id
            });

            // 인포윈도우를 생성합니다
            var infowindow = new kakao.maps.InfoWindow({
                content: `
                <div>
                    <h4>${places[i].name}</h4>
                </div>`,
                removable : true
            });

            kakao.maps.event.addListener(marker, 'click', makeClickListener(map, places[i], infowindow));
        }

        function makeClickListener(map, info, infowindow) {
            return function () {
                const { id, name, maintype, subtype, address, lat, lng, img } = info;
                dispatch(changeField({ id, name, maintype, subtype, address, lat, lng, img}));
                // infowindow.open(map, marker);
            };
        }

        kakao.maps.event.addListener(map, 'click', function(mouseEvent) {        
    
            // 클릭한 위도, 경도 정보를 가져옵니다 
            var latlng = mouseEvent.latLng;
            dispatch(initializeSelectedPlace());
            // var message = '클릭한 위치의 위도는 ' + latlng.getLat() + ' 이고, ';
            // message += '경도는 ' + latlng.getLng() + ' 입니다';
            
            // var resultDiv = document.getElementById('result'); 
            // resultDiv.innerHTML = message;
            
        });

        marker.setMap(map);

    }, []);

    return (
        <MapBlock>
            <MapContentBlock>
                <h3>{title}</h3>
                <div id="map" style={smaller===true ? {width:"100%", height:"42vh"} : {width:"100%", height:"70vh"}}></div> 
            </MapContentBlock>
        </MapBlock>
    );
};

export default Maps;