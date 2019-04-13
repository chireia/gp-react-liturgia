import React from 'react'
import { Route } from 'react-router-dom'
import { Home } from './screens/home/Home'
import Login from './screens/login/Login'
import PrivateRoute from './components/PrivateRoute'

const Routes = () => {
  return (
    <>
      <Route path="/login/" component={Login} />
      <PrivateRoute exact path="/" component={Home} />
      <PrivateRoute path="/test" component={Home} />
    </>
  )
}

export default Routes
