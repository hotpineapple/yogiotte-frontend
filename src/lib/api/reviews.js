import client from './client';

export const writeReview = ({ title, body }) => client.post('/api/reviews', { title, body });

export const listReviews = ({ rid, user }) => {
    // console.log('api called');
    if (!user) return client.get('/reviews');
    return client.get(`/${user.username}rv`);
}