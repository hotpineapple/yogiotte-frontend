import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/common/Header';
import MyPage from '../../components/mypage/MyPage';
import { logout } from '../../modules/auth';
import { Redirect } from 'react-router';
import { withRouter } from 'react-router-dom';

const MyPageContainer = () => { 
    const { form, auth, authError, loginUserId } = useSelector(({ auth }) => ({
            form: auth.login,
            auth: auth.auth,
            authError: auth.authError,
            loginUserId: auth.loginUserId, // 확인 필요
        }));
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    
    const user = localStorage.getItem('userId');
    const onLogout = () => dispatch(logout());

    useEffect(() => {
        // if (authError) {
            console.log(auth);
            console.log(loginUserId);
        if (authError) {
            if (authError) console.log(authError);
            setError('로그아웃 실패');
            return;
        }else if (auth === 'logout' && !loginUserId) {
            try {
                localStorage.removeItem('userId');
            } catch (e) {
                console.log('local storage is not working.');
            }
        }
    }, [auth, authError, loginUserId]);

    return (
        <div>
            <Header/>
            {user ?
                <MyPage onLogout={onLogout}/>
                :
                (<Redirect to="/login" />)
            }
        </div>
    );
}

export default withRouter(MyPageContainer);