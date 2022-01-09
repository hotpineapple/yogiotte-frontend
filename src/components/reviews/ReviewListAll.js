import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';


const ReviewListBlock = styled(Responsive)`
    // padding: 1rem;
    // margin: 1.5rem 0;
`;

const ReviewItemBlock = styled.div`
    padding-top: 1rem;
    padding-bottom: 1rem;
    &:first-child {
        padding-top: 0;
    }
    & + & {
        border-top: 1px solid ${palette.gray[2]};
    }
    h2{
        font-size: 2rem;
        margin-bottom: 0;
        margin-top: 0;
        &:hover {
            color: ${palette.gray[6]};
        }
    }
    p{
        margin-top: 2rem;
    }
`;

const ReviewItem = ({ review }) => {
    const { title, body } = review;
    return (
        <ReviewItemBlock>
            <div>{title}</div>
            <div>{body}</div>
        </ReviewItemBlock>
    );
}

const ReviewListAll = ({ reviews }) => {
    if (!reviews) return (<></>);
    const { pname, list } = reviews;
    return (
        <ReviewListBlock>
            {reviews && list && (
                <div>
                    <h3>{pname}</h3>
                    {list.map(r => (
                    <ReviewItem review={r} key={r.id}/>
                    ))}
                </div>
            )}
        </ReviewListBlock>
    );
};

export default ReviewListAll;