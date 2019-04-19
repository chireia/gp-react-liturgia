import { Icon, Layout, Menu } from 'antd'
import React, { useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import styled from 'styled-components'
import { useStore } from '../store/helpers'

const { Sider } = Layout

export const DefaultSidebar = withRouter(props => {
  const [collapsed, setCollapsed] = useState(false)
  const { userName } = useStore('authStore')

  return (
    <Sider
      theme="light"
      collapsible
      collapsed={collapsed}
      onCollapse={() => setCollapsed(!collapsed)}
      style={{ boxShadow: '0px 1px 5px 0px #00000010'}}
    >
      <div className="logo" />
      <Logo src={require('../assets/images/igreja.png')} />
      {!collapsed ? <Wellcome>Bem vindo {userName}</Wellcome> : ''}
      <Menu
        theme="light"
        defaultSelectedKeys={[props.history.location.pathname]}
        mode="inline"
      >
        <Menu.Item key="/">
          <Link to={'/'}>
            <Icon type="contacts" style={{color: 'green'}}/>
            <span>Home</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/colaboradores">
          <Link to={'/colaboradores'}>
            <Icon type="user" style={{color: '#00c0ff'}} />
            <span>Colaboradores</span>
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  )
})

const Logo = styled.img`
  width: 100%;
  padding: 14px;
`
const Wellcome = styled.div`
  width: 100%;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 10px;
`
