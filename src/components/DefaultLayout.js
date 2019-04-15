import { Layout } from 'antd'
import React from 'react'
import { Sidebar } from './Sidebar'
import { DefaultHeader } from './DefaultHeader'

const { Content, Footer } = Layout

export const DefaultLayout = ({ children }) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar />
      <Layout>
        <DefaultHeader />
        <Content style={{ margin: 16 }}>
          <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Liturgia 2019 - UFMT</Footer>
      </Layout>
    </Layout>
  )
}
