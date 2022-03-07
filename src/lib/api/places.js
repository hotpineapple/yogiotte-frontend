// import qs from 'qs';
import client from './client';

export const listPlaces = ({ type, category, keyword, location, user, limit }) => {
    // console.log('현재 type: ', type)
    if (type === 'myplace') return client.get(`/myplace/${user.username}?limit=${limit}`);
    else if (type === 'location') return client.get(`/place/location/${location.code}?limit=${limit}`);
    else if (type === 'search') return client.get(`/place/search/${keyword}?limit=${limit}`);
    else return client.get(`/place/${category}?limit=${limit}`);
}


export const placeDetail = ({ id }) => {
    return client.get(`/place/one/${id}`);
    // return client.get(`/place`);
}

// export const search = ({ keyword }) => {
//     return client.get(`/1`);
// }
