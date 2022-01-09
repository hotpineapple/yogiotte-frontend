import React, { useRef, useEffect } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.bubble.css';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Responsive from '../common/Responsive';
import Button from '../common/Button';
import { FiSearch } from 'react-icons/fi';

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
        position: relative;
        top: 5px;
    }
`;

const SearchInput = ({ keyword, onChangeField}) => {
    const onChangeInput = e => {
        onChangeField(e.target.value);
    }
    

    return (
        <SearchBlock>
            <InputBlock>
                <input placeholder='검색어를 입력하세요' onChange={onChangeInput} value={keyword.keyword} /> 
                <span><FiSearch /></span>
            </InputBlock>
        </SearchBlock>
    );
};

export default SearchInput;