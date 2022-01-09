import React from 'react';
import styled from 'styled-components';
import Responsive from './Responsive';
import { AiOutlineUser, AiOutlineHome } from 'react-icons/ai';
import { BsThreeDots  } from 'react-icons/bs';
import { FiMapPin, FiSearch} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette';

const FooterBlock = styled.div`
    position: fixed;
    width: 100%;
    bottom: 0;
    background: white;
    border-top: 1px solid ${palette.gray[4]}
`;

const Wrapper = styled(Responsive)`
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    .logo {
        width: 160px;
        margin-top: 24px;
    }
    .right {
        display: flex;
        align-items: center;
    }
    ul{
        width: 100%;
        padding: 0;
    }
    li {
        width: 25%;
        list-style: none;
        float: left;
        align-items: center;
        justify-content: center;
        text-align: center;
        font-size: 1.75rem;
        color: #FF2B00;
    }
`;

const Spacer = styled.div`
    height: 4rem;
`;

const Header = () => {
    return (
        <>
            <Spacer />
            <FooterBlock>
                <Wrapper>
                    <ul>
                        <li>
                            <Link to="/" ><AiOutlineHome /></Link>
                        </li>
                        <li>
                            <Link to="/location"> <FiMapPin /></Link>
                        </li>
                        <li>
                            <Link to="/mypage" ><AiOutlineUser /></Link>
                        </li>
                        <li>
                            <Link to="/search" ><FiSearch/></Link>
                        </li>
                        {/* <li>
                            <Link to="/notice" ><BsThreeDots/></Link>
                        </li> */}
                    </ul>
                </Wrapper>
            </FooterBlock>
        </>
    );
};

export default Header;