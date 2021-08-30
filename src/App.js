import './App.css'

import Navigation from './components/Navigation'
import { Switch, Route } from 'react-router'

import HomePage from './pages/HomePage'
import ContactsPage from './pages/ContactsPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'

function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path="/" exact>
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
        </Route>
      </Switch>
    </>
  )
}

export default App
