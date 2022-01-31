export const UserReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return { ...state, loginUser: action.payload }
    case 'LOGOUT_USER':
      return { ...state, loginUser: null }
    default:
      return state
  }
}
