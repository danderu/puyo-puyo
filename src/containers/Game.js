import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Board, PuyoPuyo } from '../components'
import { startGame } from '../actions'

class Game extends Component {
  componentDidMount () {
    this.props.startGame()
  }
  render () {
    console.log(this.props.game)
    return (
      <Board>
        <PuyoPuyo {...this.props} />
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
