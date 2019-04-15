import 'antd/dist/antd.css'
import { observer } from 'mobx-react-lite'
import React from 'react'
import Routes from './routes'
import { useStore } from './store/helpers'
import { DefaultLayout } from './components/DefaultLayout'

const App = observer(() => {
  const { isLoged } = useStore('authStore')

  if (!isLoged) {
    return (
      <>
        <Routes />
      </>
    )
  }
  return (
    <>
      <DefaultLayout>
        <Routes />
      </DefaultLayout>
    </>
  )
})

export default App
