import client from './client';

export const login = ({ username, password }) =>
    client.post('/user/login', { uname: username, upw: password });

export const register = ({ username, password }) =>
    client.post('/user/register', { uname: username, upw: password });

// 로그인 상태 확인
export const isLogin = () => client.get('/user/is-login');

export const logout = () => client.get('/user/logout');

export const edit = ({ username, password }) =>
client.put('/user/edit', { uname: username, upw: password });