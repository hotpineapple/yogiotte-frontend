// import qs from 'qs';
import client from './client';

export const listPlaces = ({ type, category, keyword, location, user }) => {

    if (type === 'myplace') return client.get(`/${user.username}`);
    else if (type === 'location') return client.get(`/${location.code}`);
    else if (type === 'search') return client.get(`/${keyword}`);
    else return client.get(`/${category}`);
}


export const placeDetail = ({ pid }) => {
    return client.get(`/${pid}`);
    // return client.get(`/place`);
}

export const search = ({ keyword }) => {
    return client.get(`/1`);
}
