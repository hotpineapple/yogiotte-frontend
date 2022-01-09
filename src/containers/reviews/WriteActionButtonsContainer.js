import React, { useEffect, useCallback } from 'react';
import Editor from '../../components/reviews/Editor';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { writeReview } from '../../modules/write';
import WriteActionButtons from '../../components/reviews/WriteActionButtons';

const WriteActionButttonsContainer = ({ history }) => {
    const dispatch = useDispatch();
    const { title, body, review, reviewError } = useSelector(({ write }) => ({
        title: write.title,
        body: write.body,
        review: write.review,
        reviewError: write.reviewError
    }));

    const onPublish = () => {
        dispatch(
            writeReview({
                title,
                body
            })
        );
    };

    const onCancel = () => {
        history.goBack();
    };

    useEffect(() => {
        if (review) {
            const { id, user } = review;
            history.push();
        }
        if (reviewError) {
            
        }
    }, [history, review, reviewError]);
    
    return <WriteActionButtons onPublish={onPublish} onCancel={onCancel} />
}

export default withRouter(WriteActionButttonsContainer);