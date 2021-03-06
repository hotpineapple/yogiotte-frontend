import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';
import Map from '../../components/places/Map';
import ReviewList from '../reviews/ReviewList';
import Button from '../common/Button';
import BookMarker from '../../components/common/BookMarker';

const PlaceDetailBlock = styled(Responsive)`
    // margin-top: 1.5rem;
    h3 {
        margin: 0.5rem 0 1rem;
    }
`;

const PlaceDetailContentBlock = styled.div`
    font-size: 1.13125rem;
`;

const Bookmark = styled.div`
    font-size: 2rem;
    text-align: right;
    color: #FF2B00;
}`;

const SubInfo = styled.div`
    color: ${palette.gray[8]};

    span + span:before {
        color: ${palette.gray[4]};
        padding-left: 0.25rem;
        padding-right: 0.25rem;
        content: '\\B7';
    }
`;

const DetailInfo = styled.div`
    margin-top: 1rem;
    color: ${palette.gray[8]};
    /*border-top: 1px solid #B22222;*/
    span + span:before {
        color: ${palette.gray[4]};
        padding-left: 0.25rem;
        padding-right: 0.25rem;
        content: '\\B7';
    }
`;

const ImageBox = styled.div`
    width: 100%;
    margin-bottom: 0.75rem;
    border-radius: 0.75rem;
    border: none;
    overflow: hidden;
    height: 250px;
    img {
        // width: 100%;
    }
`;

// const TabMenu = styled.div`
//     width: 100%;
//     ul {
//         width: 100%;
//         padding: 0;
//     }
//     ul li {
//         float: left;
//         width: 50%;
//         height: 35px;
//         text-align: center;
//         line-height: 35px;
//         list-style: none;
//         border: 1px solid ${palette.gray[4]};
//     }
//     ul li:last-child {
//         border-left: none;
//     }
// `;
const Reviews = styled.div`
    display: flex;
    justify-content: space-between;
    
`;

const PlaceDetail2 = ({ place }) => {
    // console.log(place);
    const { id, name, maintype, subtype, address, reviews,img } = place;
    const url = `/review/one/${id}`;

    return (
        <PlaceDetailContentBlock>
            <h3>{name}</h3>
            <ImageBox>
                <img src={img} width="100%" heigth="100%"/>
            </ImageBox>
            <Bookmark>
                <BookMarker pid={id} />
            </Bookmark>
            <SubInfo>
                <span>{maintype}</span>
                <span>{address}</span>
            </SubInfo>
            <DetailInfo>
                <h4>?????? ??????</h4>
                <div>{subtype}</div>
                <h4>??????</h4>
                <Map />
                <h4>?????? ??????</h4>
                <Reviews>
                    <Link to="/write"><Button light>????????????</Button></Link>
                    <Link to={url}><span>?????????</span></Link>
                </Reviews>
                <ReviewList reviews={reviews}/>
            </DetailInfo>
        </PlaceDetailContentBlock>
    );
}

const PlaceDetail = ({ loading, error, place }) => {
    if (error) {
        return (
            <div>????????? ??????????????????.</div>
        );
    }
    return (
        <PlaceDetailBlock>
            { !loading && place && (
                <div>
                    <PlaceDetail2 place={place} />
                </div>
            )}
        </PlaceDetailBlock>
    );
};

export default PlaceDetail;