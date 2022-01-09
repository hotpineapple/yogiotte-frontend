import React, { useEffect } from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';
import Button from '../../components/common/Button';

const PlaceItemBlock = styled(Responsive)`
    // margin-top: 0.5rem;
`;

const PlaceItemContentBlock = styled.div`
    position: relative;
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
    float: right;
    width:45%;
    // span + span:before {
    //     color: ${palette.gray[4]};
    //     padding-left: 0.25rem;
    //     padding-right: 0.25rem;
    //     content: '\\B7';
    // }
`;

const ImageBox = styled.div`
    width: 50%;
    height: 170px;
    margin-bottom: 0.75rem;
    float: left;
    img {
        // width: 100%;
    }

    border-radius: 0.75rem;
    border: none;
    overflow: hidden;
`;

const SelectedPlace = ({ place }) => {
    const { id, title, category } = place;
    const url = `/place/${id}`;
    // const url = `/place`;

    return (
        <PlaceItemBlock>
            <PlaceItemContentBlock>
                <ImageBox>
                    <img src="/cafedam.jpg" />
                </ImageBox>
                <SubInfo>
                    <div style={{fontWeight:'bold', fontSize:'1.2rem', marginBottom:'0.5rem'}}>{title}</div>
                    <div>{category}</div>
                    <br />
                    <Link to={url}>
                        <Button light>
                            상세보기
                        </Button>
                    </Link>
                    
                </SubInfo>
            </PlaceItemContentBlock>
        </PlaceItemBlock>
    );
}

export default SelectedPlace;