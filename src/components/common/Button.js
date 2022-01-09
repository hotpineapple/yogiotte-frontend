import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../../lib/styles/palette';

const StyledButton = styled.button`
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    font-weight: bold;
    padding: 0.25rem 1rem;
    color: white;
    outline: none;
    cursor: pointer;

    background: #FF2B00; 
    &:hover {
        background: #8B0000;
    }

    ${props =>
    props.fullWidth &&
    css`
        padding-top: 0.75rem;
        padding-bottom: 0.75rem;
        width: 100%;
        font-size: 1.125rem;
    `}

    ${props =>
    props.main &&
    css`
        background: #FF2B00;
        &:hover {
            background: #B22222;
        }
    `}

    ${props =>
        props.sub &&
        css`
            background: ${palette.gray[5]};
            &:hover {
                background: ${palette.gray[6]};
            }
        `
    }
    ${props =>
        props.light &&
        css`
            font-weight: normal;
        `
    }
`;

const Button = props => <StyledButton {...props} />;

export default Button;