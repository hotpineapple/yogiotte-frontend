import client from './client';

export const login = ({ username, password }) => 
    client.post('/auth/login', { username, password });

export const register = ({ username, password }) => 
    client.post('/auth/join', { username, password });

// 로그인 상태 확인
// export const isLogin = () => client.get('/user/is-login');

export const logout = () => client.get('/auth/logout');

export const edit = ({ username, password }) => 
    client.put('/user/edit', { uname: username, upw: password });