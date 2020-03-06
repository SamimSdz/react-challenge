import { Button, Slider } from 'antd'
import React from 'react'

export const MainCardView = ({ seats, setSeats }) => {
  return (
    <div className="main-card">
      <div className="main-card-header">
        <p>
          Croptomize<span>PRO</span>
        </p>
        <span className="main-card-price">${seats * 30}</span>
        <span>/month</span>
      </div>
      <div className="main-card-slider">
        <p>Number of Seats</p>
        <Slider marks={marks} step={null} min={1} max={50} defaultValue={seats} onChange={setSeats} />
      </div>
      <Button className="main-card-purchase">Purchase</Button>
    </div>
  )
}

const marks = {
  1: 1,
  5: 5,
  10: 10,
  20: 20,
  30: 30,
  40: 40,
  50: 50,
}
