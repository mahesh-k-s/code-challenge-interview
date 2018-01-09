
export default function(state = {}, action) {
  switch (action.type) {
    case 'CHANGE_CURRENT_USER':
      return { currentUser: action.user, loginError: undefined };
    case 'LOGIN_ERROR':
      return { loginError: action.message };
    default:
  }
  return state;
}
