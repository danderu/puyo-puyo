import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Board, PuyoPuyo } from '../components'
import { startGame } from '../actions'

class Game extends Component {
  constructor (...args) {
    super(...args)
    this.state = {
      bucket: []
    }
  }
  componentDidMount () {
    this.props.startGame()
  }
  componentWillReceiveProps ({ game }) {
    if (game.currentPuyoPuyo.position.y === 1) {
      this.setState({
        bucket: [...this.state.bucket, game.currentPuyoPuyo]
      })
    }
  }
  render () {
    return (
      <Board {...this.props}>
        <PuyoPuyo {...this.props.game.currentPuyoPuyo} />
        {
          this.state.bucket.map((puyoPuyo, index) => <PuyoPuyo {...puyoPuyo} key={index} />)
        }
      </Board>
    )
  }
}

Game.propTypes = {
  game: PropTypes.object,
  startGame: PropTypes.func
}

const mapStateToProps = store => store
const mapDispatchToProps = (dispatch) => {
  return {
    startGame: () => dispatch(startGame())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game)
