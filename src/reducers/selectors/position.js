import { MOVE_DOWN, START_GAME } from '../../constants'

const position = (position = {}, action) => {
  switch (action.type) {
    case MOVE_DOWN:
      return {
        ...position,
        y: position.y !== 0 ? position.y - 1 : position.y
      }
    case START_GAME:
      return {
        x: 3,
        y: 12
      }
    default:
      return position
  }
}

export default position
