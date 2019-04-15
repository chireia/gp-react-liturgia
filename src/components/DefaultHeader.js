import { Avatar, Dropdown, Icon, Layout, Menu } from 'antd'
import React from 'react'
import { useStore } from '../store/helpers'

const { Header } = Layout

const { userName, logoff } = useStore('authStore')
export const DefaultHeader = () => {
  return (
    <Header style={{ background: '#fff', padding: 0, textAlign: 'right' }}>
      <Dropdown overlay={logoffBtn} placement="bottomCenter">
        {AvatarName}
      </Dropdown>
    </Header>
  )
}

const logoffBtn = (
  <Menu onClick={logoff}>
    <Menu.Item>
      <Icon type="logout" style={{ marginRight: 5 }} /> Sair
    </Menu.Item>
  </Menu>
)

const AvatarName = (
  // eslint-disable-next-line jsx-a11y/anchor-is-valid
  <a style={{ margin: 16 }}>
    <Avatar style={{ backgroundColor: '#87d068' }} icon="user" />
    <span style={{ margin: 10 }}>{userName}</span>
    <Icon type="down" />
  </a>
)
