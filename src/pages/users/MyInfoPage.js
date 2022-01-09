import React from 'react';
import MyInfoContainer from '../../containers/auth/MyInfoContainer';

const MyInfoPage = ({match}) => {
    return (
        <div>
            <MyInfoContainer match={match}/>
        </div>
    );
};

export default MyInfoPage;