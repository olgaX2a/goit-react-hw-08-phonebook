import { useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import { getLoggedIn } from '../../redux/auth/auth-selectors'

export default function PrivateRoute({
  children,
  redirectTo = '/',
  ...routeProps
}) {
  const isLoggedIn = useSelector(getLoggedIn)
  return (
    <Route {...routeProps}>
      {isLoggedIn ? children : <Redirect to={redirectTo} />}
    </Route>
  )
}
