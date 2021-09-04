import './App.css'

import { Switch } from 'react-router'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

import PublicRoute from './components/Routes/PublicRoute'
import PrivateRoute from './components/Routes/PrivateRoute'
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'
import ContactsPage from './pages/ContactsPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'

import { getCurrentUser } from './redux/auth/auth-operations'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCurrentUser())
  }, [dispatch])

  return (
    <>
      <Navigation />
      <Switch>
        <PublicRoute path="/" exact>
          <HomePage />
        </PublicRoute>
        <PrivateRoute path="/contacts" redirectTo="/login">
          <ContactsPage />
        </PrivateRoute>
        <PublicRoute restricted path="/login" redirectTo="/contacts">
          <LoginPage />
        </PublicRoute>
        <PublicRoute restricted path="/register" redirectTo="/contacts">
          <RegisterPage />
        </PublicRoute>
        {/* <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/contacts">
          <ContactsPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/register">
          <RegisterPage />
        </Route> */}
      </Switch>
    </>
  )
}

export default App
