import { Redirect, Route, RouteProps } from 'react-router'
import { useAuth } from '../hooks'

const PrivateRoute = ({ children, ...rest }: RouteProps) => {
  let { authenticated } = useAuth()
  return (
    <Route
      {...rest}
      render={({ location }) =>
        authenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  )
}

export default PrivateRoute
