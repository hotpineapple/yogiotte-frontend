// import qs from 'qs';
import client from './client';

export const listPlaces = ({ type, category, keyword, location, user }) => {
    // console.log('현재 type: ', type)
    if (type === 'myplace') return client.get(`/myplace/${user.username}`);
    else if (type === 'location') return client.get(`/place/location/${location.code}`);
    else if (type === 'search') return client.get(`/place/search/${keyword}`);
    else return client.get(`/place/${category}`);
}


export const placeDetail = ({ id }) => {
    return client.get(`/place/one/${id}`);
    // return client.get(`/place`);
}

// export const search = ({ keyword }) => {
//     return client.get(`/1`);
// }
