import './styles.css'

import { MenuOutlined } from '@ant-design/icons'
import { Button, Layout, Menu } from 'antd'
import React from 'react'
import { useMediaQuery } from 'react-responsive'

const { Item, SubMenu } = Menu

export const Header = () => {
  const isLarge = useMediaQuery({ query: '(min-width: 810px)' })

  return (
    <Layout.Header className="header">
      {isLarge && (
        <Menu theme="dark" mode="horizontal" className="menu">
          <Item>Home</Item>
          <Item>Product</Item>
          <Item>About</Item>
          <Item>Pricing</Item>
          <Item>Blog</Item>
          <Item>Contact</Item>
          <Button className="menu-account">Account</Button>
        </Menu>
      )}
      {!isLarge && (
        <Menu theme="dark" mode="horizontal" className="menu">
          <SubMenu title={<MenuOutlined className="menu-sub" />}>
            <Button className="menu-account-small">Account</Button>
            <Item>Home</Item>
            <Item>Product</Item>
            <Item>About</Item>
            <Item>Pricing</Item>
            <Item>Blog</Item>
            <Item>Contact</Item>
          </SubMenu>
        </Menu>
      )}
    </Layout.Header>
  )
}
