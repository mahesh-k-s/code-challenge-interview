export const loginUser = user => ({ type: 'LOGIN_USER', user });
export const logoutUser = () => ({ type: 'LOGOUT_USER' });
export const searchMedia = terms => ({ type: 'SEARCH_MEDIA', terms });
