import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Board, PuyoPuyo } from '../components'
import { startGame } from '../actions'

class Game extends Component {
  componentDidMount () {
    this.props.startGame()
  }
  render () {
    return (
      <Board>
        <PuyoPuyo {...this.props.game} />
      </Board>
    )
  }
}

Game.propTypes = {
  startGame: PropTypes.func
}

const mapStateToProps = store => store
const mapDispatchToProps = (dispatch) => {
  return {
    startGame: () => dispatch(startGame())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game)
