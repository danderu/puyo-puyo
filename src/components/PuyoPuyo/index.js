import React from 'react'
import { puyoPuyo } from './styles.css'
import Puyo from '../Puyo'

const PuyoPuyo = (props) => {
  return (
    <div className={ puyoPuyo }>
      <Puyo />
      <Puyo />
    </div>
  )
}

export default PuyoPuyo
