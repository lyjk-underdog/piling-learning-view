const TokenKey = 'token';

const getToken = () => {
    return localStorage.getItem(TokenKey);
}

const setToken = (token) => {
    return localStorage.setItem(TokenKey, token);
}

const removeToken = () => {
    return localStorage.removeItem(TokenKey);
}

export default {
    getToken,
    setToken,
    removeToken
}