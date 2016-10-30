import React, { Component } from 'react'
import { board } from './styles.css'

class Board extends Component {
  componentDidMount () {
    this.board.focus()
  }
  componentDidUpdate () {
    this.board.focus()
  }

  render () {
    const { children, onKeyPress, onKeyDown } = this.props

    return (
      <div tabIndex={0} ref={ (node) => { this.board = node } } className={ board } onKeyDown={onKeyDown} onKeyPress={onKeyPress}>
        { children }
      </div>
    )
  }
}

export default Board
