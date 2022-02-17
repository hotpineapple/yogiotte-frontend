import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { changeField, initializeForm, login } from '../../modules/auth';
import AuthForm from '../../components/auth/AuthForm';
import { loginCheck } from '../../modules/user';
// import user from '../../modules/user';

const LoginForm = ({ history }) => {
    
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    
    const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
        form: auth.login,
        auth: auth.auth,
        authError: auth.authError,
        user: user.user,
    }));

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
        if (authError) {
            if (authError) console.log(authError);
            return;
        }
        if(auth === false) {
            setError('아이디 또는 비밀번호가 틀립니다.');
            return;
        } else if (auth === true) {
            console.log('로그인 성공');
            dispatch(loginCheck());
        }
    }, [auth, authError, dispatch]);

    useEffect(() => {
        if (user) {
            history.push('/');
            try {
                localStorage.setItem('user', JSON.stringify(user));
            } catch (e) {
                console.log('local storage is not working.');
            }
        }
    }, [history, user]);

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

