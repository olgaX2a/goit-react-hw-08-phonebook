import { useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import { getLoggedIn } from '../../redux/auth/auth-selectors'

/**
 * - Если маршрут ограниченный, и юзер залогинен, рендерит редирект на redirectTo
 * - В противном случае рендерит компонент
 *
 */

export default function PublicRoute({
  children,
  restricted = false,
  redirectTo = '/',
  ...routeProps
}) {
  const isLoggedIn = useSelector(getLoggedIn)
  const shouldRedirect = isLoggedIn && restricted
  return (
    <Route {...routeProps}>
      {shouldRedirect ? <Redirect to={redirectTo} /> : children}
    </Route>
  )
}
