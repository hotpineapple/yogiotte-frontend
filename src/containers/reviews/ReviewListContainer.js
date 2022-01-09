import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ReviewListAll from '../../components/reviews/ReviewListAll';
import { listReviews } from '../../modules/reviews';

const ReviewListContainer = ({ match }) => {
    let { id } = match.params;

    const dispatch = useDispatch();
    const { reviews, error, loading, user } = useSelector(
        ({ reviews, loading, user }) => ({
            reviews: reviews.reviews,
            error: reviews.error,
            user: user.user,
            loading: loading['reviews/LIST_REVIEWS'],
        }),
    );

    useEffect(() => { 
        dispatch(listReviews({ rid:id, user }));
        // console.log(reviews);
    }, [dispatch]);

    return (
        <ReviewListAll
            loading={loading}
            error={error}
            reviews={reviews}
        />
    );
};

export default withRouter(ReviewListContainer);