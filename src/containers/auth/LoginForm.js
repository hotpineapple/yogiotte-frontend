import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { changeField, initializeForm, login } from '../../modules/auth';
import AuthForm from '../../components/auth/AuthForm';
// import { loginCheck } from '../../modules/user';
// import user from '../../modules/user';

const LoginForm = ({ history }) => {

    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    
    const { form, auth, authError, loginUserId } = useSelector(({ auth }) => {
        // console.log('유즈 셀렉터가 먼가요?');
        // console.log(auth);
        return ({
            form: auth.login,
            auth: auth.auth,
            authError: auth.authError,
            loginUserId: auth.loginUserId, // 확인 필요
        });
    });

    const onChange = e => {
        const { value, name } = e.target;
        dispatch(
            changeField({
                form: 'login',
                key: name,
                value
            })
        );
    };

    const onSubmit = e => {
        e.preventDefault();
        const { username, password } = form;
        dispatch(login({ username, password }));
    };
    
    useEffect(() => {
        dispatch(initializeForm('login'));
    }, [dispatch]);
    
    useEffect(() => {
        // if (authError) {
            console.log(auth);
            console.log(loginUserId);
        if (authError) {
            if (authError) console.log(authError);
            setError('아이디 또는 비밀번호가 틀립니다.');
            return;
        }else if (auth === 'login' && loginUserId) {
            console.log('로그인 성공');
        }
    }, [auth, authError, loginUserId, dispatch]);

    useEffect(() => {
        console.log('local storage');
        console.log('userId');
        console.log(loginUserId);
        if (loginUserId) {
            try {
                localStorage.setItem('userId', loginUserId);
            } catch (e) {
                console.log('local storage is not working.');
            }
            history.push('/');
        }
    }, [history, loginUserId]);

    return (
        <AuthForm
            type="login"
            form={form}
            onChange={onChange}
            onSubmit={onSubmit}
            error={error}
        />
    );
};

export default withRouter(LoginForm);

