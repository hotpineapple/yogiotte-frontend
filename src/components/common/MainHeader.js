import React from 'react';
import styled from 'styled-components';
import Responsive from './Responsive';

const HeaderBlock = styled.div`
    position: fixed;
    width: 100%;
    background: white;
`;

const Wrapper = styled(Responsive)`
    height: 9.5rem;
    display: flex;
    align-itdems: center;
    justify-content: center;
    .logo {
        width: 240px;
        margin: 30px 0 20px;
    }
    .right {
        display: flex;
        align-items: center;
    }
`;

const Spacer = styled.div`
    height: 9.5rem;
`;

const Header = () => {
    return (
        <>
            <HeaderBlock>
                <Wrapper>
                    <img src="/logo_main.png" className="logo" />
                </Wrapper>
            </HeaderBlock>
            <Spacer />
        </>
    );
};

export default Header;