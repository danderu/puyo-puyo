import { MOVE_DOWN, START_GAME } from '../constants'
import { currentPuyoPuyo } from './selectors'

const game = (state = {}, action) => {
  switch (action.type) {
    case MOVE_DOWN:
    case START_GAME:
      return {
        ...state,
        ...currentPuyoPuyo({ state }, action)
      }
    default:
      return state
  }
}

export default game
