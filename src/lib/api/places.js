// import qs from 'qs';
import client from './client';

export const listPlaces = ({ category, keyword, location, user }) => {
    // const queryString = qs.stringify({
    //     category,
    //     sort,
    // });
    // console.log('api call executed');
    // return client.get(`/${category}`);
    if (location) return client.get(`/restaurant`);
    if (keyword) return client.get(`/${keyword}`);
    if (user) return client.get(`/${user.username}`);
    if (category) return client.get(`/${category}`);

    return client.get(`/nothing`);
}

export const placeDetail = ({ pid }) => {
    return client.get(`/${pid}`);
    // return client.get(`/place`);
}

export const search = ({ keyword }) => {
    return client.get(`/1`);
}
