import client from './client';

export const login = ({ username, password }) =>
    client.post('/api/auth/login', { username, password });

export const register = ({ username, password }) =>
    client.post('/api/auth/register', { username, password });

// 로그인 상태 확인
export const isLogin = () => client.get('/api/auth/login-check');

export const logout = () => client.get('/api/auth/logout');

export const edit = ({ username, password }) =>
client.post('/api/auth/edit', { username, password });