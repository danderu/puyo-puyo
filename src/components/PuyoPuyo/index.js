import React from 'react'
import styles from './styles.css'
import Puyo from '../Puyo'

const PuyoPuyo = ({ position }) => {
  return (
    <div className={[
      styles[`posY-${position.y}`],
      styles[`posX-${position.x}`]
    ].join(' ') }>
      <Puyo />
      <Puyo />
    </div>
  )
}

export default PuyoPuyo
