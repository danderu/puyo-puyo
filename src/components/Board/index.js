import React from 'react'
import { board } from './styles.css'

const Board = ({ children }) => (
  <div className={ board }>
    { children }
  </div>
)

export default Board
