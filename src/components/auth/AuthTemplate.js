import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';


const AuthTemplateBlock = styled.div`
    position: absolute;
    left: 0;
    top: 25%;
    right: 0;
    // bottom: 0;
    // margin: 40% 0 0;
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const WhiteBox = styled.div`
    .logo-area {
        display: block;
        padding-bottom: 2rem;
        text-align: center;
        font-weight: bold;
        letter-spacing: 2px;
    }
    //box-shadow: 0 0 8px rgba(0,0,0,0.25);
    padding: 2rem 0.75rem;
    width:100%;
    background: white;
    border-radius: 2px; 
`;

const AuthTemplate = ({ children}) => {
    return (
        <AuthTemplateBlock>
        
            <WhiteBox>  
            {children}
            </WhiteBox>
        </AuthTemplateBlock>
    );
};

export default AuthTemplate;
