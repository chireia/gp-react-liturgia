import { Icon, Layout, Menu } from 'antd'
import React, { useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import styled from 'styled-components'
import { useStore } from '../store/helpers'

const { Sider } = Layout

export const Sidebar = withRouter(props => {
  const [collapsed, setCollapsed] = useState(false)
  const { userName } = useStore('authStore')

  return (
    <Sider
      theme="light"
      collapsible
      collapsed={collapsed}
      onCollapse={() => setCollapsed(!collapsed)}
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
            <Icon type="pie-chart" />
            <span>Home</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/test">
          <Link to={'/test'}>
            <Icon type="desktop" />
            <span>Test</span>
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
