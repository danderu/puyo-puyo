import { MOVE_DOWN, START_GAME } from '../constants'

const moveDown = () => {
  console.log('> Move down')
  return {
    type: MOVE_DOWN
  }
}

const startGame = () => {
  return (dispatch, getState) => {
    console.log('> Game starting...')
    const intervalId = setInterval(() => {
      dispatch(moveDown())
    }, 1000)
    dispatch({ type: START_GAME, payload: { intervalId } })
  }
}

export {
  moveDown,
  startGame
}
