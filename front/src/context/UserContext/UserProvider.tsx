import React, { FunctionComponent, useReducer } from 'react'
import { createContext } from 'react'
export const initialState = {
  loginUser: null,
}
interface UserState {
  loginUser: any
}
export const UserContext = React.createContext<{
  state: UserState
  dispatch: React.Dispatch<any>
}>({
  state: initialState,
  dispatch: (value: any) => null,
})

import { UserReducer } from './UserReducer'

const UserProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(UserReducer, initialState)

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider
export interface Props {
  children: React.ReactNode
}
