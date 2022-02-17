import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';
import Button  from '../common/Button';

const MyPageBlock = styled(Responsive)`
    margin-top: 0.5rem;
    ul {
        padding: 0;
    }
    ul li {
        list-style-type: none;
        margin-bottom: 1rem;
    }
`;
const MyPage = ( { onLogout }) => {

    const url1 = `/myinfo`;
    const url2 = `/myplace`;
    const url3 = `/myreview`;
 
    return (
        <MyPageBlock>
            <h3>마이페이지</h3>
            <ul>
                <li>
                    <Link to={url1}>정보 수정</Link>
                </li>
                <li>
                    <Link to={url2}>내가 찜한 맛집</Link>
                </li>
                <li>
                    <Link to={url3}>내 리뷰</Link>
                </li>
            </ul>
            <Button onClick={onLogout}>로그아웃</Button>
        </MyPageBlock>);
};

export default MyPage;
