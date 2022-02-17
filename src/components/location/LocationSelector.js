import React, { useRef, useEffect } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.bubble.css';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Responsive from '../common/Responsive';
import Button from '../common/Button';
import { GrSearchAdvanced } from 'react-icons/gr';
import Select from 'react-select'

const SearchBlock = styled(Responsive)`
    margin-top: 0.5rem;
    position: absolute;
    top: 106px;
    background: red;
    height: 78vh;
    z-index: 999;
`;

const SelectBlock = styled.div`
    // position: relative;
    // width: 100%;
    // height: 50px;
    // border-radius: 0.5rem;
    // border: 1px solid ${palette.gray[5]};
    // overflow: hidden;
    // font-size: 1.5rem;
    // input {
    //     position: relative;
    //     left: 0.5rem;
    //     width: 88%;
    //     height: 50px;
    //     border: none;
    //     border: none;
    //     font-size: 1rem;
    //     &:focus {
    //         color: $oc-teal-7;
    //         border-bottom: 1px solid ${palette.gray[7]};
            
    //     }
        
    // }
    // span {
    //     position: absolute;
    //     top: 10px;
    //     right: 10px;
    //     font-size: 1.75rem;
    // }
`;



const LocationSelector = ({ onChangeField}) => {
    const onChangeInput = e => {
        onChangeField(e.target.value)
        // onChangeField(locationCode);
    }
    
    return (
        <SearchBlock>
            <SelectBlock>
                <select>
                    <option selected>시,도</option>
                    <option>서울시</option>
                    <option>경기도</option>
                </select>

                <select>
                    <option selected>구,군</option>
                    <option>...</option>
                    <option>!!!</option>
                </select>

                <select>
                    <option selected>동</option>
                    <option>...</option>
                    <option>???</option>
                </select>
            </SelectBlock>
        </SearchBlock>
    );
};

export default LocationSelector;