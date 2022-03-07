import React, { useState, useEffect, useCallback, forwardRef } from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';
import Button from '../../components/common/Button';
import AuthForm from '../auth/AuthForm';
// import { scroller } from "react-scroll";

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

const PlaceItem = forwardRef(({ place }, ref) => {
    useEffect(() => {
        // console.log('스크롤위치');
        // console.log(localStorage.getItem('scroll'));
        window.scrollTo(0, localStorage.getItem('scroll'), { behavior: 'auto' });
        // document.getElementById('root').scrollTo(0, localStorage.getItem('scroll'), { behavior: 'auto' });
    }, [place]);

    const { id, name, subtype, address, lat, lng, img } = place;
    // console.log(`/place/one/${id}`);
    const url = `/place/one/${id}`;
    // const url = `/place`;
    return (
        <PlaceItemBlock>
            <ImageBox>
                <Link to={url}>
                    <img src={img} width="100%" height="100%" />
                </Link>
            </ImageBox>
            <SubInfo>
                <span style={{ fontWeight: 'bold' }}>{name}</span>
                <span>{subtype}</span>
                <span ref={ref}>{address}</span>
            </SubInfo>
        </PlaceItemBlock>
    );
});

const PlaceList = forwardRef(({ title, loading, error, places, scrollStart }, ref) => {
    // const {
    //     scrollTop
    // } = this.state
    
    
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
        <PlaceListBlock class="myscroll">
            <h3>{title}</h3>
            {!loading && places && (
                <>
                <div>
                    {places.map((p,idx) => (
                        <React.Fragment key={idx}>
                            {places.length - 1 === idx ? (
                                <PlaceItem place={p} /*key={p.id}*/ ref={ref}/>
                            ): (
                                <PlaceItem place={p} /*key={p.id}*//>
                            )}    
                        </React.Fragment>
                    ))}
                </div>
                {/* <div>
                    <Button light onClick={onmore}>
                        더보기
                    </Button>
                </div> */}
                </>
            )}
            {loading && (<div>로딩중입니다.</div>)}
        </PlaceListBlock>
    );
});

export default React.memo(PlaceList);