import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm, register, editInfo } from '../../modules/auth';
import AuthForm from '../../components/auth/AuthForm';
import { loginCheck } from '../../modules/user';
import { withRouter } from 'react-router-dom';

const RegisterForm = ({ history, savedInfo }) => {
    // console.log(savedInfo);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();

    const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
        form: auth.register,
        auth: auth.auth,
        authError: auth.authError,
        user: user.user,
    }));

    const onChange = e => {
        const { value, name } = e.target;
        dispatch(
            changeField({
                form: 'register',
                key: name,
                value
            })
        );
    };

    const onSubmit = e => {
        e.preventDefault();
        const { username, password, passwordConfirm } = form;
        
        if ([username, password, passwordConfirm].includes('')) {
            setError('아이디와 비밀번호는 필수값입니다.');
            return;
        }

        if (password !== passwordConfirm) {
            setError('비밀번호가 일치하지 않습니다.');
            dispatch(changeField({form: 'register', key:'password', value:''}));
            dispatch(changeField({form: 'register', key:'passwordConfirm', value:''}));
            return;
        }
        dispatch(register({ username, password }));
    };
    
    const onSubmit2 = e => {
        e.preventDefault();
        const { username, password, passwordConfirm } = form;
        
        if ([username, password, passwordConfirm].includes('')) {
            setError('아이디와 비밀번호는 필수값입니다.');
            return;
        }

        if (password !== passwordConfirm) {
            setError('비밀번호가 일치하지 않습니다.');
            dispatch(changeField({form: 'register', key:'password', value:''}));
            dispatch(changeField({form: 'register', key:'passwordConfirm', value:''}));
            return;
        }
        dispatch(editInfo({ username, password }));
    };

    useEffect(() => {
        dispatch(initializeForm('register'));
    }, [dispatch]);

    useEffect(() => {
        if (authError) {
            if (authError.response.status === 409) {
                setError('사용중인 아이디입니다.');
            }
            console.log(authError);
            return;
        }
        if (!savedInfo && auth === 'true') {
            console.log('회원가입성공');
            history.push('/login');
            // console.log(auth);
            // dispatch(loginCheck());
        }
    }, [auth, authError, dispatch]);
    
    // useEffect(() => {
    //     if (savedInfo) return;

    //     if (user) {
    //         console.log('로그인 확인 api 성공');
    //         console.log(user);
    //         history.push('/');
    //         try {
    //             localStorage.setItem('user', JSON.stringify(user));
    //         } catch (e) {
    //             console.log('local storage is not working.');
    //         }
    //     }
    // }, [history,user]);

    if (savedInfo) 
        return (
            <AuthForm
                savedInfo={savedInfo}
                type="edit"
                form={form}
                onChange={onChange}
                onSubmit={onSubmit2}
                error={error}
            />
        );
    
    return (
        <AuthForm
            type="register"
            form={form}
            onChange={onChange}
            onSubmit={onSubmit}
            error={error}
        />
    );
};

export default withRouter(RegisterForm);

