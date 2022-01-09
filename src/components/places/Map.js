/* global kakao */
import React, { useEffect } from "react";

const { kakao } = window;

const Map = () => {

    useEffect(() => {
        let container = document.getElementById("map");

        let options = {
            center: new kakao.maps.LatLng(37.36892446719013, 127.10183457696866),
            level: 5,
        };

        let map = new kakao.maps.Map(container, options);
        // map.setDraggable(false);
        // map.setZoomable(false);
        
        // console.log("loading kakaomap");
        var markerPosition  = new kakao.maps.LatLng(37.36892446719013, 127.10183457696866); 
        var marker = new kakao.maps.Marker({
            position: markerPosition
        });
        marker.setMap(map);

    }, []);

    return (
        <div>
            <div id="map" style={{width:"100%", height:"240px", zIndex:"-1"}}></div> 
        </div>
    );
};

export default Map;