import './styles.css'

import { Col } from 'antd'
import React from 'react'

import { MainCardView } from './card'

export const MainView = ({ seats, setSeats }) => {
  return (
    <Col className="main-container">
      <h1 className="main-header-text">Croptomize Pricing Tiers</h1>
      <MainCardView seats={seats} setSeats={setSeats} />
    </Col>
  )
}
