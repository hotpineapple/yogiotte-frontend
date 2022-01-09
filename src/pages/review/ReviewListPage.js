import React from 'react';
import ReviewListContainer from '../../containers/reviews/ReviewListContainer';
import Header from '../../components/common/Header'

const ReviewListPage = ({ pname }) => {
    return (
        <>
            <Header />
            <ReviewListContainer pname={pname} />
        </>
    );
};

export default ReviewListPage;