import React, { useState } from 'react'

import { Content } from '../../components/Content'
import { MainView } from './view'

export default () => {
  const [seats, setSeats] = useState(1)

  return (
    <Content>
      <MainView seats={seats} setSeats={setSeats} />
    </Content>
  )
}
