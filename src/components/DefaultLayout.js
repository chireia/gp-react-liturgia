import { Layout } from 'antd'
import React from 'react'
import { DefaultSidebar } from './DefaultSidebar'
import { DefaultHeader } from './DefaultHeader'

const { Content, Footer } = Layout

export const DefaultLayout = ({ children }) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <DefaultSidebar />
      <Layout>
        <DefaultHeader />
        <Content style={{ margin: 12 }}>{children}</Content>
        <Footer style={{ textAlign: 'center' }}>Liturgia 2019 - UFMT</Footer>
      </Layout>
    </Layout>
  )
}
