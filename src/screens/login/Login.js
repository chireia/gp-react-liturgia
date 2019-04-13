import { observer } from 'mobx-react-lite'
import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { useStore } from '../../store/helpers'

const Login = observer(() => {
  const { login, isLoged } = useStore('authStore')
  const [formValues, setFormValues] = useState({
    user: '',
    pin: ''
  })

  function handleUser(e) {
    setFormValues({ ...formValues, user: e.target.value })
  }

  function handlePin(e) {
    setFormValues({ ...formValues, pin: e.target.value })
  }

  function handleSubmit() {
    login(formValues)
  }

  return (
    <>
      {isLoged ? (
        <Redirect to={'/'} />
      ) : (
        <div>
          <input onChange={handleUser} value={formValues.user} />
          <input onChange={handlePin} value={formValues.pin} />
          <button onClick={handleSubmit}>Asda</button>
        </div>
      )}
    </>
  )
})

export default Login
