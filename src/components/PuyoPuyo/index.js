import React from 'react'
import styles from './styles.css'
import Puyo from '../Puyo'

const PuyoPuyo = ({ currentPuyoPuyo }) => {
  return (
    <div className={[
      styles[`posY-${currentPuyoPuyo.position.y}`],
      styles[`posX-${currentPuyoPuyo.position.x}`]
    ].join(' ') }>
      <Puyo />
      <Puyo />
    </div>
  )
}

export default PuyoPuyo
