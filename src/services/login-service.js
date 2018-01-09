import userList from '../data/user.json';

export function loginUser(user) {
  if (user == null || user.userId == null || user.password == null) return undefined;
  const targetUser = (userList || []).find(item => (user.userId === item.id && user.password === item.password)) || {};
  const {
    id, displayName, firstName, lastName,
  } = targetUser;
  return id != null ? {
    id, displayName, firstName, lastName,
  } : undefined;
}

const loginService = () => next => (action) => {
  next(action);
  switch (action.type) {
    case 'LOGIN_USER':
      const user = loginUser(action.user);
      return user == null ? next({
        type: 'LOGIN_ERROR',
        message: 'Invalid user id or password',
      }) : next({
        type: 'CHANGE_CURRENT_USER',
        user,
      });
    case 'LOGOUT_USER':
      return next({
        type: 'CHANGE_CURRENT_USER',
        user: undefined,
      });
    default:
  }
};

export default loginService;
