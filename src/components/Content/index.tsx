import './styles.css'

import { Layout, Row } from 'antd'
import React from 'react'

import { Header } from '../Header/Header'

export const Content = ({ children }) => (
  <Layout className="content-container">
    <Header />
    <Layout.Content className="content-layout">
      <Row className="content-body">{children}</Row>
    </Layout.Content>
  </Layout>
)
