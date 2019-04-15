import React from 'react'
import { Route, withRouter } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import { Home } from './screens/home/Home'
import Login from './screens/login/Login'
import { Test } from './screens/test/Test'

const Routes = () => {
  return (
    <>
      <Route path="/login" component={Login} />
      <PrivateRoute exact path="/" component={Home} />
      <PrivateRoute path="/test" component={Test} />
    </>
  )
}

export default withRouter(Routes)
