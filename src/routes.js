import React from 'react'
import { Route, withRouter } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import { Home } from './screens/home/Home'
import Login from './screens/login/Login'
import { ColabIndex } from './screens/Colaboradores/ColabIndex'

const Routes = () => {
  return (
    <>
      <Route path="/login" component={Login} />
      <PrivateRoute exact path="/" component={Home} />
      <PrivateRoute path="/colaboradores/:id?" component={ColabIndex} />
    </>
  )
}

export default withRouter(Routes)
