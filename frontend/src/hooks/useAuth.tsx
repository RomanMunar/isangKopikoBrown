import React, { FC, useMemo } from 'react'
import { User } from '../generated/graphql'

interface State {
  authenticated: boolean
  user: User
}

const initialState = {
  authenticated: false,
  user: {},
}

type Action =
  | {
      type: 'AUTHENTICATE_USER'
      payload: User
    }
  | {
      type: 'UNAUTHICATE_USER'
    }

export const AuthContext = React.createContext<State | any>(initialState)

AuthContext.displayName = 'AuthContext'

function authReducer(state: State, action: Action) {
  switch (action.type) {
    case 'AUTHENTICATE_USER': {
      return {
        ...state,
        user: action.payload,
        authenticated: true,
      }
    }
    case 'UNAUTHICATE_USER': {
      return {
        ...state,
        authenticated: false,
        user: {},
      }
    }
    default: {
      console.warn(`${action!.type} does not exist`)
      return state
    }
  }
}

interface IAuthContext {
  authenticated: boolean
  user: User
  addUser: ({
    payload,
  }: {
    payload: Pick<User, 'id' | 'email' | 'role'>
  }) => void
  logout: () => void
}

export const AuthProvider: FC = (props) => {
  const [state, dispatch] = React.useReducer(authReducer, initialState)

  const value = useMemo(
    () =>
      ({
        ...state,
        addUser: ({ payload }) => {
          dispatch({ type: 'AUTHENTICATE_USER', payload })
        },
        logout: () => dispatch({ type: 'UNAUTHICATE_USER' }),
      } as IAuthContext),
    // eslint-disable-next-line
    [state]
  )

  return <AuthContext.Provider value={value} {...props} />
}

export const useAuth = () => {
  const context = React.useContext<IAuthContext>(AuthContext)
  if (context === undefined) {
    throw new Error(`useAuth must be used within a AuthProvider`)
  }
  return context
}

export default useAuth
