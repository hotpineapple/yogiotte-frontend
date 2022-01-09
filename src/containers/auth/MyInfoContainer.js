import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import AuthTemplate from '../../components/auth/AuthTemplate';
import LoginForm from '../../containers/auth/LoginForm';
import Header from '../../components/common/Header';
import MyPage from '../../components/mypage/MyPage';
import { logout } from '../../modules/user';
import RegisterForm from '../../containers/auth/RegisterForm';

const MyInfoContainer = ({ match }) => {
    // const { uid } = match.params;
    // const { user } = useSelector(({ user }) =>  ({ user: user.user }));
    const user = {
        username: 'zee1994',
        password: '1234',
    };
    // const dispatch = useDispatch();

    return (
        <div>
            <Header/>
            <AuthTemplate>
                <RegisterForm savedInfo={user}/>
            </AuthTemplate>
        </div>
    );
}

export default MyInfoContainer;