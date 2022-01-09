import React from 'react';
import styled from 'styled-components';
import Responsive from './Responsive';

const HeaderBlock = styled.div`
    position: fixed;
    width: 100%;
    background: white;
    z-index: 999;
`;

const Wrapper = styled(Responsive)`
    height: 3.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    .logo {
        width: 160px;
        margin-top: 4px;
    }
    .right {
        display: flex;
        align-items: center;
    }
`;

const Spacer = styled.div`
    height: 3.5rem;
`;

const Header = () => {
    return (
        <>
            <HeaderBlock>
                <Wrapper>
                    <img src="/logo_sub.png" className="logo" />
                </Wrapper>
            </HeaderBlock>
            <Spacer />
        </>
    );
};

export default Header;