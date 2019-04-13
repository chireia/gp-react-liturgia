import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { useStore } from '../store/helpers'

const PrivateRoute = observer(({ component: Component, ...rest }) => {
  const { isLoged } = useStore('authStore')
  return (
    <Route
      {...rest}
      render={props =>
        isLoged ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location }
            }}
          />
        )
      }
    />
  )
})

export default PrivateRoute
