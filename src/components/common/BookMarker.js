import React, { useEffect, useState } from "react";
import { BsBookmarkStar, BsFillBookmarkStarFill } from 'react-icons/bs';
import client from '../../lib/api/client';

const BookMarker = ({ pid }) => {
    const [marked, setMarked] = useState('false');

    useEffect(() => { 
        // client.post(`/marked`);
        // console.log('toggle bookmark');
    }, [marked]);

    if (marked === 'true') {
        return (
            <BsFillBookmarkStarFill onClick={() => { setMarked('false')}} />
        );
    }
    return (
        <BsBookmarkStar onClick={() => { setMarked('true')}} />
    );   
};

export default BookMarker;
