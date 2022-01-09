import React from 'react';
import EditorContainer from '../../containers/reviews/EditorContainer';
import Responsive from '../../components/common/Responsive';
import WriteActionButtonsContainer from '../../containers/reviews/WriteActionButtonsContainer';
import Header from '../../components/common/Header';

const ReviewWritePage = () => {
    return (
        <>
            <Header />
            <Responsive>
                <h3>리뷰 작성</h3>
                <EditorContainer />
                <WriteActionButtonsContainer/>
            </Responsive></>
    );
};

export default ReviewWritePage;