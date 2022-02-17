import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Responsive from '../../components/common/Responsive';
import { MdOutlineLocalCafe, MdOutlineLocalBar } from 'react-icons/md';
import { RiRestaurant2Line } from 'react-icons/ri';
import PlaceListPage from '../places/PlaceListPage';
import palette from '../../lib/styles/palette';
import MainHeader from '../../components/common/MainHeader';

const Wrapper = styled(Responsive)`
    margin-bottom: 4.5rem;
    height: 4rem;
    // display: flex;
    align-items: center;
    justify-content: center;
    h3 {
        width: 100%;
    }
    ul{
        position: relative;
        width: 100%;
        padding: 0;
    }
    li {
        width: 33%;
        list-style: none;
        float: left;
        align-items: center;
        justify-content: center;
        text-align: center;
        font-size: 2.25rem;
        //font-weight: light;
        color: ${palette.gray[6]};
    }
    li div {
        font-size: 0.75rem;
    }
`;
const HomePage = () => {
    return (
        <>
            <MainHeader />
            <Wrapper>
                <h3>테마별 맛집</h3>
                <ul>
                    <li>
                        <Link to="/place/restaurant"><RiRestaurant2Line /><div>레스토랑</div></Link>
                    </li>
                    <li>
                        <Link to="/place/cafe"><MdOutlineLocalCafe /><div>카페</div></Link>
                    </li>
                    <li>
                        <Link to="/place/bar" ><MdOutlineLocalBar /><div>바</div></Link>
                    </li>
                </ul>
            </Wrapper>
            <PlaceListPage type="mainPage"/>
        </>
    );
}

export default HomePage;
