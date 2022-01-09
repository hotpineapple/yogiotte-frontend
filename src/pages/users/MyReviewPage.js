import React from 'react';
import ReviewListContainer from '../../containers/reviews/ReviewListContainer';
import Header from '../../components/common/Header';

const MyReviewPage = () => {
    return (
        <div>
            <Header />
            <ReviewListContainer />
        </div>
    );
};

export default MyReviewPage;