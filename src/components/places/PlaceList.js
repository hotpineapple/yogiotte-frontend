import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';

const PlaceListBlock = styled(Responsive)`
    margin-top: 0.5rem;
`;

const PlaceItemBlock = styled.div`
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

const SubInfo = styled.div`
    color: ${palette.gray[8]};

    span + span:before {
        color: ${palette.gray[4]};
        padding-left: 0.25rem;
        padding-right: 0.25rem;
        content: '\\B7';
    }
`;

const ImageBox = styled.div`
    width: 100%;
    height: 250px;
    margin-bottom: 0.75rem;

    img {
        // width: 100%;
    }

    border-radius: 0.75rem;
    border: none;
    overflow: hidden;
`;

const PlaceItem = ({ place }) => {
    const { id, name, location } = place;
    const url = `/place/${id}`;
    // const url = `/place`;
    return (
        <PlaceItemBlock>
            <ImageBox>
                <Link to={url}>
                    <img src="/cafedam.jpg" />
                </Link>
            </ImageBox>
            <SubInfo>
                <span>{name}</span>
                <span>{location}</span>
            </SubInfo>
        </PlaceItemBlock>
    );
}

const PlaceList = ({ title, loading, error, places }) => {
    if (error) {
        return (
            <div>에러가 발생했습니다.</div>
        );
    }

    if (Array.isArray(places) && places.length === 0) {
        return (
            <div>맛집이 없습니다.</div>
        );
    }
    return (
        <PlaceListBlock>
            <h3>{title}</h3>
            {!loading && places && (
                <div>
                    {places.map(p => (
                    <PlaceItem place={p} key={p.id}/>
                    ))}
                </div>
            )}
        </PlaceListBlock>
    );
};

export default PlaceList;