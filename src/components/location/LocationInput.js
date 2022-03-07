// import React, { useRef, useEffect } from 'react';
// import Quill from 'quill';
// import 'quill/dist/quill.bubble.css';
// import styled from 'styled-components';
// import palette from '../../lib/styles/palette';
// import Responsive from '../common/Responsive';
// import Button from '../common/Button';
// import { GrSearchAdvanced } from 'react-icons/gr';
// import { BiCurrentLocation } from 'react-icons/bi';
// import Select from 'react-select'

// const SearchBlock = styled(Responsive)`
//     margin-top: 0.5rem;
//     position: relative;
// `;

// const InputBlock = styled.div`
//     position: relative;
//     width: 100%;
//     height: 50px;
//     border-radius: 0.5rem;
//     border: 1px solid ${palette.gray[5]};
//     overflow: hidden;
//     font-size: 1.5rem;

//     input {
//         position: relative;
//         left: 0.5rem;
//         width: 88%;
//         height: 50px;
//         border: none;
//         border: none;
//         font-size: 1rem;
//         &:focus {
//             color: $oc-teal-7;
//             border-bottom: 1px solid ${palette.gray[7]};
            
//         }
//     }
//     span {
//         position: absolute;
//         top: 12px;
//         right: 10px;
//         // font-size: 1.75rem;
//     }
// `;



// const LocationInput = ({ location, isSearching,  onChangeField, onChangeField2 }) => {
//     // console.log(location?.name);
//     const onChangeInput = e => {
//         onChangeField(e.target.value)
//         // onChangeField(locationCode);
//     }
    
//     const onClickIcon = () => {
//         if (!isSearching) onChangeField2(true);
//         else onChangeField2(false);
//     }

//     return (
//         <SearchBlock>
//             <InputBlock>
//                 <input readonly="true" placeholder='위치' onChange={onChangeInput} value={location?.name}/> 
//                 {isSearching ?
//                     (<span><BiCurrentLocation onClick={onClickIcon} /></span>)
//                     :
//                     (<span><GrSearchAdvanced onClick={onClickIcon} /></span>)
//                 }
//             </InputBlock>
//         </SearchBlock>
//     );
// };

// export default LocationInput;