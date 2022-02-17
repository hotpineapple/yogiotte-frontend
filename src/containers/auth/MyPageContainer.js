import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import AuthTemplate from '../../components/auth/AuthTemplate';
import LoginForm from '../../containers/auth/LoginForm';
import Header from '../../components/common/Header';
import MyPage from '../../components/mypage/MyPage';
import { tempSetUser, loginCheck, logout } from '../../modules/user';
import { Redirect } from 'react-router';

const MyPageContainer = () => { 
    let isLogin = true; // 추후 수정 필요
    const dispatch = useDispatch();
    // dispatch(tempSetUser({username:'zee1994', password:'1234'}));
    // dispatch(loginCheck());
    const { user } = useSelector(({ user }) =>  ({ user: user.user }));
    
    const onLogout = () => {
        dispatch(logout());
    }
    return (
        <div>
            <Header/>
            {user ? // 서버 구현 후 user로 수정
                <MyPage onLogout={onLogout}/>
                :
                (<Redirect to="/login" />)
                // (
                //     <AuthTemplate>
                //         <LoginForm />
                //     </AuthTemplate>
                // )
            }
        </div>
    );
}

export default MyPageContainer;