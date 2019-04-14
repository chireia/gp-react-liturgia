import React from 'react'
import { observer } from 'mobx-react-lite'
import { useStore } from '../../store/helpers'
import { Button } from 'antd/lib/radio'

export const Home = observer(() => {
  const { logoff } = useStore('authStore')
  return (
    <>
      Home
      <Button onClick={() => logoff()}>Sair</Button>
    </>
  )
})
