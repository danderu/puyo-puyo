import { MOVE_DOWN, START_GAME, HORIZONTAL } from '../../constants'
import position from './position'

const currentPuyoPuyo = (currentPuyoPuyo = {}, action) => {
  switch (action.type) {
    case MOVE_DOWN:
      return {
        ...currentPuyoPuyo,
        ...position({ currentPuyoPuyo }, action)
      }
    case START_GAME:
      return {
        orientation: HORIZONTAL,
        ...position({ currentPuyoPuyo }, action)
      }
    default:
      return currentPuyoPuyo
  }
}

export default currentPuyoPuyo
