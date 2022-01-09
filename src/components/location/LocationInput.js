import React, { useRef, useEffect } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.bubble.css';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Responsive from '../common/Responsive';
import Button from '../common/Button';
import { FiSearch } from 'react-icons/fi';
import Select from 'react-select'

const SearchBlock = styled(Responsive)`
    margin-top: 0.5rem;
    position: relative;
`;

const InputBlock = styled.div`
    position: relative;
    width: 100%;
    height: 50px;
    border-radius: 0.5rem;
    border: 1px solid ${palette.gray[5]};
    overflow: hidden;
    font-size: 1.5rem;
    input {
        position: relative;
        left: 0.5rem;
        width: 90%;
        height: 50px;
        border: none;
        border: none;
        font-size: 1rem;
        &:focus {
            color: $oc-teal-7;
            border-bottom: 1px solid ${palette.gray[7]};
            
        }
        
    }
    span {
        position: absolute;
        top: 12px;
        right: 10px;
    }
`;



const LocationInput = ({ location, onChangeField}) => {

    const onChangeInput = e => {
        onChangeField(e.target.value);
    }
    

    return (
        <SearchBlock>
        <InputBlock>
            <input placeholder='위치' onChange={onChangeInput} value={location} /> 
            <span><FiSearch /></span>
        </InputBlock>
    </SearchBlock>
    );
};

export default LocationInput;