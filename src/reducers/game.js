import { MOVE_DOWN, START_GAME, VERTICAL } from '../constants'
import { currentPuyoPuyo } from './selectors'

const initialState = {
  currentPuyoPuyo: {
    orientation: VERTICAL,
    position: {
      x: 3,
      y: 12
    }
  }
}

const game = (state = initialState, action) => {
  switch (action.type) {
    case MOVE_DOWN:
    case START_GAME:
      return {
        ...state,
        currentPuyoPuyo: {
          ...currentPuyoPuyo(state, action)
        }
      }
    default:
      return state
  }
}

export default game
